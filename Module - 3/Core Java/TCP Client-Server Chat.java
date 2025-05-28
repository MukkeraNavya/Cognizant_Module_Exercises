import java.io.*;
import java.net.*;

public class ChatProgram {

    public static void main(String[] args) {
        // Start Server in a separate thread
        new Thread(() -> startServer()).start();

        // Delay to ensure server starts before client connects
        try { Thread.sleep(1000); } catch (InterruptedException e) { }

        // Start Client
        startClient();
    }

    // Server Method
    public static void startServer() {
        try (ServerSocket serverSocket = new ServerSocket(5000)) {
            System.out.println("Server started. Waiting for client...");
            Socket socket = serverSocket.accept();
            System.out.println("Client connected.");

            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

            out.println("Hello Client!");
            String msg = in.readLine();
            System.out.println("Client says: " + msg);

            socket.close();
        } catch (IOException e) {
            System.out.println("Server error: " + e.getMessage());
        }
    }

    // Client Method
    public static void startClient() {
        try (Socket socket = new Socket("localhost", 5000)) {
            System.out.println("Client started. Connected to server.");

            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

            String serverMsg = in.readLine();
            System.out.println("Server says: " + serverMsg);
            out.println("Hi Server!");

        } catch (IOException e) {
            System.out.println("Client error: " + e.getMessage());
        }
    }
}