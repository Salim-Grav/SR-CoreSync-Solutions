import math
import os
import random
import subprocess
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw

PROJECT_DIR = r"d:\I-Ai\App\S&R CoreSync Solutions\Project"
SRC_IMG_PATH = r"C:\Users\msali\.gemini\antigravity-ide\brain\90440ea8-7710-4550-8b0c-ce0569918954\.user_uploaded\media_1790838637969.jpg"
ASSETS_DIR = os.path.join(PROJECT_DIR, "assets")
TEMP_FRAMES_DIR = os.path.join(PROJECT_DIR, "scratch", "frames")

os.makedirs(ASSETS_DIR, exist_ok=True)
os.makedirs(TEMP_FRAMES_DIR, exist_ok=True)

src_img = Image.open(SRC_IMG_PATH).convert("RGB")
print(f"Loaded source image: {src_img.size}")

# 1. Update founder-salim.png avatar with a clean high-res circular face crop
# Face center in 1024x1024 image is around x=645, y=365, radius=180
avatar_box = (450, 175, 840, 565)
avatar_crop = src_img.crop(avatar_box).resize((256, 256), Image.Resampling.LANCZOS)
# Make circular with anti-aliasing
mask = Image.new("L", (1024, 1024), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((0, 0, 1024, 1024), fill=255)
mask = mask.resize((256, 256), Image.Resampling.LANCZOS)
avatar_png = Image.new("RGBA", (256, 256), (0, 0, 0, 0))
avatar_png.paste(avatar_crop.convert("RGBA"), (0, 0), mask)
avatar_png.save(os.path.join(ASSETS_DIR, "founder-salim.png"), "PNG")
print("Saved high-res founder-salim.png avatar!")

# 2. Prepare base composition for Hero Widescreen (1280x720)
# Dark cinematic luxury background: dark emerald-black #010907 with warm golden lighting
hero_w, hero_h = 1280, 720
# We position the portrait on the right/center-right (as in dananajmah hero where text is on the right in RTL or left in LTR)
# Actually in dananajmah RTL, Dana is on the left/center-left, text is on the right!
# Let's create a beautiful 1400x800 base canvas so we have margin for pan/zoom
base_w, base_h = 1440, 810
base_canvas = Image.new("RGB", (base_w, base_h), (1, 9, 7))

# Resize portrait to fit height with margin
p_h = int(base_h * 1.15)
p_w = int(src_img.width * (p_h / src_img.height))
p_resized = src_img.resize((p_w, p_h), Image.Resampling.LANCZOS)

# Position portrait: centered or slightly offset to left (leaving room for headline in RTL)
p_x = int((base_w - p_w) * 0.35)
p_y = int((base_h - p_h) * 0.2)

# Blend portrait into dark edges with gradient mask
grad_mask = Image.new("L", (p_w, p_h), 255)
draw_mask = ImageDraw.Draw(grad_mask)
# Soft fade at edges
for i in range(120):
    alpha = int(255 * (i / 120))
    draw_mask.line([(i, 0), (i, p_h)], fill=alpha)
    draw_mask.line([(p_w - i, 0), (p_w - i, p_h)], fill=alpha)
    draw_mask.line([(0, i), (p_w, i)], fill=alpha)
    draw_mask.line([(0, p_h - i), (p_w, p_h - i)], fill=alpha)

base_canvas.paste(p_resized, (p_x, p_y), grad_mask)

# Save Hero poster
hero_poster = base_canvas.crop((80, 45, 80 + hero_w, 45 + hero_h))
hero_poster.save(os.path.join(ASSETS_DIR, "hero-founder-poster.webp"), "WEBP", quality=92)
print("Saved hero-founder-poster.webp!")

# 3. Generate Hero Video Frames (10 seconds, 24 fps = 240 frames)
# Slow breathing zoom: scale from 1.0 to 1.05 and back to 1.0 using sin wave
num_frames = 240
hero_frames_dir = os.path.join(TEMP_FRAMES_DIR, "hero")
os.makedirs(hero_frames_dir, exist_ok=True)

# Generate pseudo-particles for atmospheric dust
random.seed(42)
particles = []
for _ in range(45):
    particles.append({
        'x': random.uniform(0, hero_w),
        'y': random.uniform(0, hero_h),
        'speed_x': random.uniform(-0.4, 0.4),
        'speed_y': random.uniform(-0.8, -0.2),
        'size': random.uniform(1.5, 4.0),
        'alpha': random.uniform(40, 110)
    })

print("Rendering hero video frames...")
for f in range(num_frames):
    t = f / num_frames
    phase = 2 * math.pi * t
    
    # Breathing scale: 1.0 to 1.045
    zoom = 1.0 + 0.045 * (0.5 - 0.5 * math.cos(phase))
    # Subtle smooth pan
    pan_x = 10 * math.sin(phase)
    pan_y = 6 * math.cos(phase)
    
    # Calculate crop from base_canvas
    crop_w = hero_w / zoom
    crop_h = hero_h / zoom
    cx = (base_w / 2) + pan_x
    cy = (base_h / 2) + pan_y
    
    x1 = cx - crop_w / 2
    y1 = cy - crop_h / 2
    x2 = x1 + crop_w
    y2 = y1 + crop_h
    
    frame_img = base_canvas.crop((int(x1), int(y1), int(x2), int(y2))).resize((hero_w, hero_h), Image.Resampling.BILINEAR)
    
    # Subtle warm ambient pulse
    pulse_brightness = 1.0 + 0.03 * math.sin(phase)
    enhancer = ImageEnhance.Brightness(frame_img)
    frame_img = enhancer.enhance(pulse_brightness)
    
    # Draw subtle atmospheric golden bokeh/particles
    particle_layer = Image.new("RGBA", (hero_w, hero_h), (0, 0, 0, 0))
    p_draw = ImageDraw.Draw(particle_layer)
    for p in particles:
        # Loop particle coordinates
        px = (p['x'] + p['speed_x'] * f * 2) % hero_w
        py = (p['y'] + p['speed_y'] * f * 2) % hero_h
        r = p['size']
        # Golden particle color with breathing alpha
        pa = int(p['alpha'] * (0.7 + 0.3 * math.sin(phase + p['x'])))
        p_draw.ellipse((px - r, py - r, px + r, py + r), fill=(212, 175, 55, pa))
    
    frame_composite = Image.alpha_composite(frame_img.convert("RGBA"), particle_layer).convert("RGB")
    frame_path = os.path.join(hero_frames_dir, f"frame_{f:04d}.jpg")
    frame_composite.save(frame_path, "JPEG", quality=90)

print("Hero frames generated. Encoding hero video with FFmpeg...")
hero_mp4 = os.path.join(ASSETS_DIR, "hero-founder-cinematic.mp4")
cmd = [
    "ffmpeg", "-y",
    "-framerate", "24",
    "-i", os.path.join(hero_frames_dir, "frame_%04d.jpg"),
    "-c:v", "libx264",
    "-preset", "medium",
    "-crf", "22",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    hero_mp4
]
res = subprocess.run(cmd, capture_output=True, text=True)
if res.returncode == 0:
    print(f"Hero video successfully created: {hero_mp4} ({os.path.getsize(hero_mp4)} bytes)")
else:
    print("FFmpeg hero error:", res.stderr)

# 4. Prepare About Section Media (Aspect ratio ~ 4:5 or 1:1, 720x860)
about_w, about_h = 720, 860
base_about = Image.new("RGB", (about_w + 100, about_h + 100), (1, 9, 7))

# Fit portrait to about frame height
ap_h = about_h + 100
ap_w = int(src_img.width * (ap_h / src_img.height))
ap_resized = src_img.resize((ap_w, ap_h), Image.Resampling.LANCZOS)
ap_x = int((about_w + 100 - ap_w) / 2)
ap_y = 0

base_about.paste(ap_resized, (ap_x, ap_y))

# Save About poster
about_poster = base_about.crop((50, 50, 50 + about_w, 50 + about_h))
about_poster.save(os.path.join(ASSETS_DIR, "about-founder-poster.webp"), "WEBP", quality=92)
print("Saved about-founder-poster.webp!")

# Generate About Video Frames
about_frames_dir = os.path.join(TEMP_FRAMES_DIR, "about")
os.makedirs(about_frames_dir, exist_ok=True)

print("Rendering about video frames...")
for f in range(num_frames):
    t = f / num_frames
    phase = 2 * math.pi * t
    
    zoom = 1.0 + 0.04 * (0.5 - 0.5 * math.cos(phase))
    pan_y = 8 * math.sin(phase)
    
    crop_w = about_w / zoom
    crop_h = about_h / zoom
    cx = (about_w + 100) / 2
    cy = (about_h + 100) / 2 + pan_y
    
    x1 = cx - crop_w / 2
    y1 = cy - crop_h / 2
    x2 = x1 + crop_w
    y2 = y1 + crop_h
    
    frame_img = base_about.crop((int(x1), int(y1), int(x2), int(y2))).resize((about_w, about_h), Image.Resampling.BILINEAR)
    
    # Warm breathing light
    pulse_brightness = 1.0 + 0.025 * math.sin(phase)
    enhancer = ImageEnhance.Brightness(frame_img)
    frame_img = enhancer.enhance(pulse_brightness)
    
    frame_path = os.path.join(about_frames_dir, f"frame_{f:04d}.jpg")
    frame_img.save(frame_path, "JPEG", quality=90)

print("About frames generated. Encoding about video with FFmpeg...")
about_mp4 = os.path.join(ASSETS_DIR, "about-founder-cinematic.mp4")
cmd2 = [
    "ffmpeg", "-y",
    "-framerate", "24",
    "-i", os.path.join(about_frames_dir, "frame_%04d.jpg"),
    "-c:v", "libx264",
    "-preset", "medium",
    "-crf", "22",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    about_mp4
]
res2 = subprocess.run(cmd2, capture_output=True, text=True)
if res2.returncode == 0:
    print(f"About video successfully created: {about_mp4} ({os.path.getsize(about_mp4)} bytes)")
else:
    print("FFmpeg about error:", res2.stderr)

# Clean up temp frames to save space
import shutil
shutil.rmtree(TEMP_FRAMES_DIR, ignore_errors=True)
print("All frames cleaned up. Videos and posters ready in assets!")
