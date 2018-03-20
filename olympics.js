// Joyce Wu & Queenie Xiang
// SoftDev2 pd7
// K12 -- Medallions ....of Data!
// 2018-03-19

var svg = d3.select("svg");
var korea = true; //if true, svg will show South Korea's medals
var country = document.getElementById("country"); //title

//South Korea: 5 gold, 8 silver, 4 bronze
//Germany: 14 gold, 10 silver, 7 bronze

//build circle function
var build_circle = function(cx, cy, r, color){
  var circle = svg.append("circle")
                  .attr("cx", cx)
                  .attr("cy", cy)
                  .attr("r", r)
                  .attr("fill", color);
}

//creates circles in svg
//all medal counts multiplied by 5 to get r
var switch_countries = function(e){
  if(korea){
    svg.selectAll("*").remove(); //clears svg
    build_circle(250, 100, 25, "yellow"); //gold
    build_circle(250, 250, 40, "grey"); //silver
    build_circle(250, 400, 20, "brown"); //bronze
    country.innerHTML = "South Korea";
  }else{
    svg.selectAll("*").remove();
    build_circle(250, 100, 70, "yellow"); //gold
    build_circle(250, 250, 50, "grey"); //silver
    build_circle(250, 400, 35, "brown"); //silver
    country.innerHTML = "Germany"
  }
  korea = !korea;
}

//button toggle
var btn = document.getElementById("switch");
btn.addEventListener("click", switch_countries);
