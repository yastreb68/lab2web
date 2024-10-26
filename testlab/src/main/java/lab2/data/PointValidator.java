package lab2.data;

public class PointValidator {
    public boolean validate(String x, String y, String r) {
        try {
            float xVal = Float.parseFloat(x);
            float yVal = Float.parseFloat(y);
            float rVal = Float.parseFloat(r);
            return xVal >= -2 && xVal <= 2 && yVal >= -3 && yVal <= 5 && (rVal == 1 || rVal == 2 || rVal == 3 || rVal == 4 || rVal == 5);
        } catch (Exception e) {
            return false;
        }
    }
}
