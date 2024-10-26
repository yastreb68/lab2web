package lab2.data;

public class Result {
    private final float x;
    private final float y;
    private final float r;
    private final boolean inArea;
    private final String scriptTime;
    private final long curDate;

    public Result(float x, float y, float r, String scriptTime, long curDate) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.scriptTime = scriptTime;
        this.inArea = isInside(x, y, r);
        this.curDate = curDate;
    }

    public float getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public float getR() {
        return r;
    }

    public String getScriptTime() {
        return scriptTime;
    }

    public long getCurDate() {
        return curDate;
    }

    public boolean isInArea() {
        return inArea;
    }

    private boolean isInside(float x, float y, float r) {
        if (x >= 0 && y <= 0 && (x * x + y * y <= (r / 2) * (r / 2))) return true;
        if (x >= 0 && y >= 0 && y <= - x + r ) return true;
        return x <= 0 && x >= -r && y <= 0 && y >= -r / 2;
    }
}
