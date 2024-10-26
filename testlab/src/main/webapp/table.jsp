<%@ page import="lab2.data.Result" %>
<%@ page contentType="text/html; charset=UTF-8"%>

<jsp:useBean id="storage" scope="session" class="lab2.data.ResultStorage" />

<div>
  <table id="data-table">
    <tr>
      <th>X</th>
      <th>Y</th>
      <th>R</th>
      <th>Дата</th>
      <th>Время выполнения</th>
      <th>Результат</th>
    </tr>
    <%
      if (storage != null) {
        for (Result result : storage.getResults()) {
          String stringResult = result.isInArea() ? "Попадание" : "Промах";
    %>
    <tr>
      <td><%= result.getX() %></td>
      <td><%= result.getY() %></td>
      <td><%= result.getR() %></td>
      <td class="curDate"><%= result.getCurDate() %></td>
      <td><%= result.getScriptTime() %></td>
      <td><%= stringResult %></td>
    </tr>
    <%
        }
      }
    %>
  </table>
</div>
<script>
  let dates = document.getElementsByClassName("curDate");
  for (let elem of dates) {
    let curDate = new Date(parseInt(elem.innerHTML));
    elem.innerHTML = curDate.toLocaleString();
  }
</script>
