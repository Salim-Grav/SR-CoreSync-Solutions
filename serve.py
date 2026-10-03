import http.server
import socketserver
import functools
import os

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIRECTORY)
    print(f"Starting server on 127.0.0.1:{PORT} serving {DIRECTORY}...", flush=True)
    with socketserver.TCPServer(("127.0.0.1", PORT), handler) as httpd:
        print(f"Server is listening on http://127.0.0.1:{PORT}", flush=True)
        print(f"Main site: http://localhost:{PORT}/index.html", flush=True)
        print(f"English:   http://localhost:{PORT}/en/index.html", flush=True)
        print(f"Dutch:     http://localhost:{PORT}/nl/index.html", flush=True)
        print(f"Demo:      http://localhost:{PORT}/demo.html", flush=True)
        print(f"Logo:      http://localhost:{PORT}/logo-studio.html", flush=True)
        httpd.serve_forever()
