import http.server
import os
import socketserver

def run_html_server(directory, port=8000):
    """
    Run a simple HTTP server serving HTML files from the specified directory on the given port.

    Args:
    - directory (str): The directory containing HTML files to be served.
    - port (int): The port number on which the server should listen. Default is 8000.
    """
    try:
        # Change the current directory to the specified directory
        os.chdir(directory)

        # Create a TCP/IP socket server
        with socketserver.TCPServer(("", port), http.server.SimpleHTTPRequestHandler) as httpd:
            print(f"Serving HTML files from '{directory}' directory at http://localhost:{port}/")
            # Start the server and keep it running until interrupted
            httpd.serve_forever()
    except Exception as e:
        print(f"Error: {e}")

# Example usage:
# Run the server serving HTML files from the "website" directory on port 8080
run_html_server("../onenizam_web", port=8080)
