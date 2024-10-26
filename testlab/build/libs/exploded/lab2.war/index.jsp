<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Лаб 2 Ченцов Матвей Петрович P3216</title>
    <script defer src="static/validation.js"></script>
    <script defer src="static/graph.js"></script>
    <script defer src="static/main.js"></script>
    <link href="static/styles.css" rel="stylesheet">
</head>
<body>
<div class="container">
    <div class="data header">
        <h2>Ченцов Матвей Петрович P3216 Вариант 224312</h2>
    </div>

    <div class="data main">
        <form id="data-form">
            <div class="inputs">
                <div class="single-field y-field">
                    <label for="y">Y</label>
                    <input id="y" name="y" type="text" placeholder="от -3 до 5" onkeyup="validateY()"/>
                </div>

                <div class="single-field r-field">
                    <label>R</label>
                    <fieldset>
                        <input id="1-r" type="radio" name="r" value="1" onchange="loadGraph();" checked/>
                        <label for="1-r"> 1</label>
                        <input id="2-r" type="radio" name="r" value="2" onchange="loadGraph();" />
                        <label for="2-r"> 2</label>
                        <input id="3-r" type="radio" name="r" value="3" onchange="loadGraph();" />
                        <label for="3-r"> 3</label>
                        <input id="4-r" type="radio" name="r" value="4" onchange="loadGraph();" />
                        <label for="4-r"> 4</label>
                        <input id="5-r" type="radio" name="r" value="5" onchange="loadGraph();" />
                        <label for="5-r"> 5</label>
                    </fieldset>
                </div>


                <div class="single-field x-field">
                    <fieldset>
                        <legend>X</legend>
                        <input id="-2-x" type="radio" name="x" value="-2" checked/>
                        <label for="-2-x"> -2</label>
                        <input id="-1.5-x" type="radio" name="x" value="-1.5"/>
                        <label for="-1.5-x"> -1.5</label>
                        <input id="-1-x" type="radio" name="x" value="-1"/>
                        <label for="-1-x"> -1</label>
                        <input id="-0.5-x" type="radio" name="x" value="-0.5"/>
                        <label for="-0.5-x"> -0.5</label>
                        <input id="0-x" type="radio" name="x" value="0"/>
                        <label for="0-x"> 0</label>
                        <input id="0.5-x" type="radio" name="x" value="0.5"/>
                        <label for="0.5-x"> 0.5</label>
                        <input id="1-x" type="radio" name="x" value="1"/>
                        <label for="1-x"> 1</label>
                        <input id="1.5-x" type="radio" name="x" value="1.5"/>
                        <label for="1.5-x"> 1.5</label>
                        <input id="2-x" type="radio" name="x" value="2"/>
                        <label for="2-x"> 2</label>
                    </fieldset>
                </div>
            </div>

            <div class="graph-zone">
                <div class="single-field graph">
                    <canvas width="300" height="300">...</canvas>
                </div>
                <input type="submit" value="Отправить" id="submit" disabled class="hidden">
            </div>
        </form>
    </div>

    <div class="data table-data">
        <%@include file="table.jsp"%>
    </div>
</div>
</body>
</html>
