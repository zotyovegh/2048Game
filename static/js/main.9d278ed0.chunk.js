(this.webpackJsonp2048game=this.webpackJsonp2048game||[]).push([[0],{12:function(e,r,t){},13:function(e,r,t){},14:function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),o=t(6),s=t.n(o),c=(t(12),t(1)),u=t(2),l=t(4),i=t(3),v=function(e){switch(e){case 2:case 4:return"#776e65"}return"white"},f=function(e){switch(e){case 2:return"#EBDCD0";case 4:return"#E9DBBA";case 8:return"#E9A067";case 16:return"#F08151";case 32:return"#F2654F";case 64:return"#F1462C";case 128:return"#E7C65E";case 256:return"#E8C350";case 512:return"#E8BE40";case 1024:return"#E7B723";case 2048:return"#C2B3A3"}},d=function(e){return 0!==e.data.value?n.a.createElement("div",{className:"cell",style:{color:v(e.data.value),background:f(e.data.value)}}," ",e.data.value):n.a.createElement("div",{className:"cell",style:{background:"#cdc1b4"}})},m=function(e){var r=e.cells.map((function(e,r){return n.a.createElement(d,{key:r,data:e})}));return n.a.createElement("div",{className:"row"},r)},h=function(e){Object(l.a)(t,e);var r=Object(i.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=r.call(this,e)).createGrid=function(e){for(var r=[],t=0;t<e.rows;t++){r.push([]);for(var a=0;a<e.columns;a++)r[t].push({x:a,y:t,value:0})}for(var n=0;n<2;n++){var o=void 0;do{var s=Math.floor(Math.random()*e.rows),c=Math.floor(Math.random()*e.columns);o=r[s][c]}while(o.value>0);0===o.value&&(o.value=2*Math.floor(2*Math.random()+1))}return r},a.getEmptyGrid=function(){for(var e=[],r=0;r<a.props.rows;r++){e.push([]);for(var t=0;t<a.props.columns;t++)e[r].push({x:t,y:r,value:0})}return e},a.slide=function(e){for(var r=[],t=0;t<4;t++)r[t]=e[t].value;var a=r.filter((function(e){return e})),n=4-a.length;a=Array(n).fill(0).concat(a);for(var o=0;o<4;o++)e[o].value=a[o];return e},a.combine=function(e){for(var r=3;r>=1;r--){var t=e[r].value,n=e[r-1].value;t===n&&(e[r].value=t+n,a.props.score(e[r].value),e[r-1].value=0)}return e},a.flip=function(e){for(var r=0;r<4;r++)e[r].reverse();return e},a.rotate=function(e){for(var r=a.getEmptyGrid(),t=0;t<4;t++)for(var n=0;n<4;n++)r[t][n]=e[n][t];return r},a.placeRandom=function(){var e,r,t,n=a.state.rows;do{e=Math.floor(Math.random()*a.props.rows),r=Math.floor(Math.random()*a.props.columns),t=n[e][r]}while(t.value>0);0===t.value&&(t.value=2*Math.floor(2*Math.random()+1)),n[e][r]=t,a.setState({rows:n})},a.doSlide=function(e){for(var r=0;r<4;r++)e[r]=a.slide(e[r]),e[r]=a.combine(e[r]),e[r]=a.slide(e[r]);return e},a.isGameOver=function(){for(var e=a.state.rows,r=0;r<4;r++)for(var t=0;t<4;t++){if(0==e[r][t].value)return;if(3!==r&&e[r][t].value===e[r+1][t].value)return;if(3!==t&&e[r][t].value===e[r][t+1].value)return}console.log("Game over!!!")},a.onKeyPressed=function(e){var r=a.state.rows,t=JSON.stringify(r),n=!1,o=!1;switch((e=e||window.event).keyCode){case 39:case 68:r=a.doSlide(r);break;case 37:case 65:r=a.flip(r),r=a.doSlide(r),n=!0;break;case 40:case 83:r=a.rotate(r),r=a.doSlide(r),o=!0;break;case 38:case 87:r=a.rotate(r),r=a.flip(r),r=a.doSlide(r),o=!0,n=!0}n&&(r=a.flip(r)),o&&(r=a.rotate(r),r=a.rotate(r),r=a.rotate(r)),a.setState({rows:r}),JSON.stringify(r)!==t&&a.placeRandom(),a.isGameOver()},a.state={rows:a.createGrid(e)},a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){document.onkeydown=this.onKeyPressed}},{key:"render",value:function(){var e=this.state.rows.map((function(e,r){return n.a.createElement(m,{cells:e,key:r})}));return n.a.createElement("div",{className:"grid"},e)}}]),t}(a.Component),p=(t(13),function(e){Object(l.a)(t,e);var r=Object(i.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=r.call(this)).setScore=function(e){var r=a.state.score+e;a.setState({score:r})},a.state={rows:4,columns:4,score:0},a}return Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"grid"},n.a.createElement(h,{score:this.setScore.bind(this),rows:this.state.rows,columns:this.state.columns})),n.a.createElement("div",{className:"score"},n.a.createElement("p",null,this.state.score," ")))}}]),t}(a.Component));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root"))},7:function(e,r,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.9d278ed0.chunk.js.map