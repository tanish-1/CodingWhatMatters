import java.util.Arrays;

public class ReverseArray {
    static void ReverseFunc(int i ,int temp, int[] arr , int n){
        if (i>n/2) return;
        temp = arr[n-i-1];
        arr[n-i-1] = arr[i];
        arr[i] = temp;
        ReverseFunc(i+1,temp,arr,n);
    }
    public static void main(String[] args) {
        int[] arr = {1, 4, 3, 2, 6};
        ReverseFunc(0,0,arr,arr.length);
        System.out.println(Arrays.toString(arr));
    }
}
