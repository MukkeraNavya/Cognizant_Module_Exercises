import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamEven {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 4, 5, 8, 10, 13);
        List<Integer> evens = numbers.stream()
                                     .filter(n -> n % 2 == 0)
                                     .collect(Collectors.toList());
        evens.forEach(System.out::println);
    }
}