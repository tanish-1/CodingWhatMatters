public class ValidPalindrome {
    public static void main(String[] args) {
        String s = "A man 0";
        s = s.replaceAll("[^a-zA-Z]","").toLowerCase();
        StringBuilder ns = new StringBuilder(s);
        String res = ns.reverse().toString();
        System.out.println(res);
        System.out.println(s);
       boolean value = s.equals(res) ? true : false;
        System.out.println(value);
    }
}
