package lab2.servlets;

import lab2.data.PointValidator;
import lab2.data.Result;
import lab2.data.ResultStorage;
import com.google.gson.Gson;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.Locale;

@WebServlet(urlPatterns = "/areaCheck")
public class AreaCheckServlet extends HttpServlet {
    private final PointValidator validator = new PointValidator();
    private final Gson gson = new Gson();

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        long startTime = System.nanoTime() / 1000;
        String x = (String) req.getAttribute("x");
        String y = (String) req.getAttribute("y");
        String r = (String) req.getAttribute("r");
        String status = (String) req.getAttribute("status");

        if (validator.validate(x, y, r)) {
            HttpSession session = req.getSession();
            ResultStorage storage = (ResultStorage) session.getAttribute("storage");
            if (storage == null) {
                storage = new ResultStorage();
                session.setAttribute("storage", storage);
            }
            float xVal = Float.parseFloat(x);
            float yVal = Float.parseFloat(y);
            float rVal = Float.parseFloat(r);
            long curTime = System.nanoTime() / 1000;
            double scriptTime = (curTime - startTime) / 1000.0;
            Result result = new Result(xVal, yVal, rVal, String.format(Locale.ENGLISH, "%.3f ms", scriptTime), System.currentTimeMillis());
            storage.addResult(result);
            switch (status) {
                case "fromForm" -> resp.sendRedirect("results.jsp");
                case "fromGraph" -> {
                    resp.setContentType("application/json");
                    resp.getWriter().write(gson.toJson(result));
                }
                default -> resp.sendRedirect("index.jsp");
            }
        } else {
            resp.sendRedirect("index.jsp");
        }
    }
}
