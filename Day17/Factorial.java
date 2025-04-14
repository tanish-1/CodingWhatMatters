import java.util.ArrayList;
import java.util.Arrays;

public class Factorial {


    public static void main(String[] args) {
        int n = 3;
       int[] arr = {1, 4, 3, 2, 6};
//       int[] temp = new int[1];
        int temp = 0;
        for(int i = 0 ; i<arr.length/2 ; i++){
            temp = arr[arr.length-i-1];
            arr[arr.length-i-1] = arr[i];
            arr[i] = temp;

        }
        System.out.println(Arrays.toString(arr));
    }
}

