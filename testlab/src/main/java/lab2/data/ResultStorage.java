package lab2.data;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class ResultStorage {
    List<Result> results = new CopyOnWriteArrayList<>();
    public void addResult(Result result) {
        results.add(result);
    }
    public List<Result> getResults() {
        return results;
    }
}
