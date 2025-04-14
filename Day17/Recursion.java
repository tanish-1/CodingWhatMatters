public class Recursion {
  static  int nthSeries(int sum , int count , int digit) {
      if (count == digit) {
          sum = sum+  count * count * count;
          return sum;
      }
      sum = sum + count * count * count;
      return nthSeries(sum, count + 1, digit);
  }
    public static void main(String[] args) {
        int n = 7;
        System.out.println(nthSeries(0,1,n));
  }
}




















//    Akogare no Onna Joushi ga, Aibeya Shucchou no Tonari no Bed de Zetsurin Otoko ni Netorarete Iru