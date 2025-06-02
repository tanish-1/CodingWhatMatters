package questions;

public class LargestElement {
    public static void main(String[] args) {
        int max = Integer.MIN_VALUE;
        int[] nums = {3, 3, 0, 99, -40};
        for (int i = 0 ; i< nums.length ; i++){
            if(nums[i]>max){
                max = nums[i];
            }
        }
        System.out.println(max);
    }
}
