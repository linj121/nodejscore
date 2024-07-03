# Section 1

This is a setup of tools that will be used throughout the rest of this course

## Dependencies

If you are using Windows and WSL, install NVM in WSL, and install Postman and Wireshark on Windows.

- NVM (Node Version Manager)
- Postman (test http requests)
- Wireshark (Analyze network packets)

## Usage

1. Start the http server by `node helloworld.js`, keep a note of the address and port
2. Test server connection by `curl localhost:4000` in the terminal, or make any http request to `localhost:4000` using Postman
3. Capture server traffic using `adapter for loopback traffic capture` option in Wireshark. Optionally, apply the traffic filter `tcp.port eq 4000`
   - Now test server connection again (step 2), you should see tcp connections to the server in Wireshark

## For WSL and Linux Users

Use `ps` and `top` commands to monitor system resources and running processes

Check out the following tutorials if you need to brush them up

- https://www.youtube.com/watch?v=wYwGNgsfN3I
- https://www.youtube.com/watch?v=WsR11EGF9PA

## Notes

- [NodeJS Under The Hood](./NodejsUnderTheHood.md)
