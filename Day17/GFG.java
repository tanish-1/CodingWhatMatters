import java.util.ArrayList;
import java.util.List;

public class GFG {
   static int lcm(int x ,int y) {
       int max = Math.max(x,y);
       while (true){
           if (max%x == 0 && max%y == 0){
               return max;
           }
           max++;
       }
       }
       static int gcd(int x , int y){
       int small = Math.min(x,y);
       while (true){
           if (x%small == 0 && y%small == 0){
               return small;
           }
           small--;
       }
       }
    public static void main(String[] args) {
       int a = 12;
       int b = 18;
        System.out.println(5/5);
        int res =  lcm(a,b);
        int res2 = gcd(a,b);
        System.out.println(res+" "+ res2);
    }
}
