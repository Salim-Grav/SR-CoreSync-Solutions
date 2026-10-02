import http.server
import socketserver
import functools
import os

PORT = 8080
DIRECTORY = r"F:\I-Ai\App\S&R CoreSync Solutions\Project"

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIRECTORY)
    print(f"Starting server on 127.0.0.1:{PORT} serving {DIRECTORY}...", flush=True)
    with socketserver.TCPServer(("127.0.0.1", PORT), handler) as httpd:
        print(f"Server is listening on http://127.0.0.1:{PORT}", flush=True)
        httpd.serve_forever()
