package lab2.servlets;

import java.io.*;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import lab2.data.PointValidator;

@WebServlet(urlPatterns = "/controller")
public class ControllerServlet extends HttpServlet {
    private final PointValidator validator = new PointValidator();
    private final Gson gson = new Gson();

    public void doPost(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {
        StringBuilder jsonStringBuilder = new StringBuilder();
        String line;
        BufferedReader reader = request.getReader();
        while ((line = reader.readLine()) != null) {
            jsonStringBuilder.append(line);
        }
        JsonObject jsonObject =  gson.fromJson(jsonStringBuilder.toString(), JsonObject.class);
        String x = jsonObject.get("x").getAsString();
        String y = jsonObject.get("y").getAsString();
        String r = jsonObject.get("r").getAsString();
        String status = jsonObject.get("status").getAsString();

        if (validator.validate(x, y, r)) {
            request.setAttribute("x", x);
            request.setAttribute("y", y);
            request.setAttribute("r", r);
            request.setAttribute("status", status);
            RequestDispatcher requestDispatcher = request.getRequestDispatcher("/areaCheck");
            requestDispatcher.forward(request, resp);
        } else {
            resp.sendRedirect("index.jsp");
        }
    }
}