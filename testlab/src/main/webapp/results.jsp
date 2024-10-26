<%@ page contentType="text/html; charset=UTF-8" %>
<html>
<head>
    <title>Результаты</title>
    <link href="static/styles.css" rel="stylesheet">
</head>
<body>
<div class="container">
    <div class="data table-data">
        <a href="${pageContext.request.contextPath}/index.jsp"><img src="static/return.png" alt="Вернуться"/></a>
        <%@include file="table.jsp"%>
    </div>
</div>
</body>
</html>
