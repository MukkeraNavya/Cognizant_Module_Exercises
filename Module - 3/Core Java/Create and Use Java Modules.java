public class ModuleSimulation {
    
    // Simulated com.utils.Util class
    static class Util {
        public static String greet(String name) {
            return "Hello, " + name;
        }
    }

    // Simulated com.greetings.Main class
    public static void main(String[] args) {
        System.out.println(Util.greet("World"));
    }
}