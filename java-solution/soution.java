import java.util.Arrays;

class ArrayMerger {

    public static int[] merge(int[] arr1, int[] arr2) {
        int[] result = new int[arr1.length + arr2.length];
        int[] longer = arr1;

        if (arr1.length < arr2.length) {
            longer = arr2;
        }

        if (arr1.length == 0)
            return arr2;
        if (arr2.length == 0)
            return arr1;

        int a = 0, b = 0, c = 0;

        while (a < arr1.length && b < arr2.length) {
            if (arr1[a] < arr2[b]) {
                result[c] = arr1[a];
                a++;
            } else {
                result[c] = arr2[b];
                b++;
            }

            c++;
        }

        if (arr1.length != arr2.length) {
            while (a < longer.length) {
                result[c] = longer[a];
                c++;
                a++;
            }

        }

        return result;
    }

    public static void main(String[] args) {
        int[] a = { 1, 3, 5, 9 };
        int[] b = { 4, 7, 8, 9, 10, 13 };

        System.out.println(Arrays.toString(merge(a, b)));
    }
}