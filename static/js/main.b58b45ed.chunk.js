(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){t.exports=a(40)},,,,,function(t,e,a){},,function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(t,e,a){},,,,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),s=a(12),o=a.n(s),r=(a(19),a(8)),l=a(2),c=a(3),u=a(5),h=a(4),p=a(6),d=(a(21),a(22),a(24),a(7)),m=a.n(d),v={two_opt:function(t,e,a){var n=t.slice(0,e);return n=(n=n.concat(t.slice(e,a).reverse())).concat(t.slice(a,t.length))},assemble_dist_matrix:function(t){for(var e=this.createEmptyMatrix(t.length),a=0;a<t.length;a++)for(var n=0;n<t.length;n++)e[a][n]=this.euclidianDistance(t,a,n),e[n][a]=this.euclidianDistance(t,a,n);return e},assembleNeighborhood:function(t){for(var e=[],a=1;a<=t.length;a++)for(var n=a+1;n<=t.length;n++)e.push(this.two_opt(t,a,n));return e},swap:function(t,e,a){var n=t,i=n[e];return n[e]=n[a],n[a]=i,n},getSolutionCost:function(t,e){for(var a=0,n=0;n<t.length-1;n++)a+=e[t[n]][t[n+1]];return a+=e[t[t.length-1]][t[0]]},euclidianDistance:function(t,e,a){return Math.sqrt(Math.pow(t[e][0]-t[a][0],2)+Math.pow(t[e][1]-t[a][1],2))},createEmptyMatrix:function(t){for(var e=[],a=0;a<t;a++)e[a]=new Array(t);return e},shuffleArray:function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),n=[t[a],t[e]];t[e]=n[0],t[a]=n[1]}return t}},f=a(13),g=function t(e,a){Object(l.a)(this,t),this.position=e,this.position_cost=a,this.velocity=[],this.personal_best=e,this.personal_best_cost=a},b=function(t,e,a){for(var n=[],i=1/0,s=[];n.length<a;){var o=v.shuffleArray(t.slice(1,t.length));o.splice(0,0,0);var r=v.getSolutionCost(o,e);n.includes(o)||(n.push(new g(o,r)),r<i&&(i=r,s=o))}return[n,s,i]},E=function(t,e,a,n){for(var i=t.personal_best,s=e,o=1;o<t.position.length;o++){if(Math.random()<=a&&t.position[o]!==i[o]){var r=[o,i.indexOf(t.position[o]),a];t.velocity.push(r),i=v.swap(i,r[0],r[1])}if(Math.random()<=n&&t.position[o]!==s[o]){var l=[o,s.indexOf(t.position[o]),a];t.velocity.push(l),s=v.swap(s,l[0],l[1])}}},y=function(t){return t.forEach(function(t){t.velocity=[]}),t},w=function(t,e,a){for(var n=performance.now(),i=!0,s=v.getSolutionCost(t,e);i;){i=!1;for(var o=1;o<=t.length;o++)for(var r=o+1;r<=t.length;r++){var l=v.two_opt(t,o,r),c=v.getSolutionCost(l,e);c<s&&(t=l,s=c,i=!0)}!1===i&&a(t,s.toFixed(2),((performance.now()-n)/1e3).toFixed(2))}},x=function(t,e,a,n,i){for(var s,o=performance.now(),r=1,l=t,c=[l],u=v.getSolutionCost(t,e);r<n;){var h=v.assembleNeighborhood(l);l=h[0],s=v.getSolutionCost(l,e),h.forEach(function(t){var a=v.getSolutionCost(t,e);!c.includes(t)&&a<s&&(l=t,s=a)}),s<u?(t=l,u=s,r=1):r+=1,c.push(l),c.length>a&&c.pop(0),r+=1}i(t,u.toFixed(2),((performance.now()-o)/1e3).toFixed(2))},S=function(t,e,a,n,i){for(var s=performance.now(),o=0,r=!0,l=b(t,e,a),c=Object(f.a)(l,3),u=c[0],h=c[1],p=c[2],d=20*n/100,m=1;o<n;)r=!1,console.log(o),o===d*m&&(m+=1,u=y(u)),u.forEach(function(a){if(E(a,t,.7,.6),a.velocity.forEach(function(t){var n=v.two_opt(a.position,t[0],t[1]),i=v.getSolutionCost(n,e);if(i<a.position_cost){var s=[n,i];a.position=s[0],a.position_cost=s[1]}}),a.position_cost<a.personal_best_cost){var n=[a.position_cost,a.position];a.personal_best_cost=n[0],a.personal_best=n[1]}if(a.position_cost<p){var i=[a.position_cost,a.position,!0,0];p=i[0],h=i[1],r=i[2],o=i[3]}}),r||(o+=1);i(h,p.toFixed(2),((performance.now()-s)/1e3).toFixed(2))},k=function(){function t(e,a,n,i,s){Object(l.a)(this,t),this.nodes=e,this.route=n,this.width=i,this.height=s,this.coords=a,this.s=function(t){var e=[];t.setup=function(){t.createCanvas(i,s),t.noLoop();for(var n=0;n<a.length;n++){var o=t.createVector(a[n][0],a[n][1]);e[n]=o}},t.draw=function(){t.background(0),t.fill(255);for(var a=0;a<e.length;a++)t.ellipse(e[a].x,e[a].y,6,6);if(n.length>0){for(t.stroke(255),t.strokeWeight(2),t.noFill(),a=0;a<n.length-1;a++)t.line(e[n[a]].x,e[n[a]].y,e[n[a+1]].x,e[n[a+1]].y);t.stroke("red"),t.line(e[0].x,e[0].y,e[n[n.length-1]].x,e[n[n.length-1]].y),t.stroke(255)}}}}return Object(c.a)(t,[{key:"updateSketch",value:function(t,e){this.nodes=t,this.route=e}}]),t}(),C=(a(26),a(28),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{alt:"Loading..",src:"/tsp-solver/loading.gif",height:"50px",id:"loading-icon"})," ")}}]),e}(n.Component)),O=(a(30),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"header"}," ",i.a.createElement("h3",null," TSP Instance Generator"),i.a.createElement("p",null,"The Travelling Salesman Problem (TSP) is one of the more well-known combinatorial optimization problems in the field of operations research."),i.a.createElement("p",null,"This page allows you to generate a random complete graph G = (V,E) with a |V| amount of cities and solve the problem with three different common solution methods: Greedy Algorithm with improvement by Local Search, Tabu Search and Particle Swarm Optimization."),i.a.createElement("p",null,"Distance between cities is given by the Euclidian Distance (in pixels) between them."))}}]),e}(n.Component)),j=(a(32),a(34),a(9)),I=a(0),R=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{id:"contactInfo"},i.a.createElement("h3",null," Vitor Notini Pontes"),i.a.createElement("p",null,"Full-stack developer working with Python, Javascript and Progress 4GL"),i.a.createElement("p",null," Masters student at the Universidade Federal de Lavras "),i.a.createElement(I.b.Provider,{value:{size:"2em"}},i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://github.com/notini/"}," ",i.a.createElement(j.b,null)," ")),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/vitornotini/"},i.a.createElement(j.c,null))),i.a.createElement("li",null,i.a.createElement("a",{style:{},target:"_blank",rel:"noopener noreferrer",href:"http://lattes.cnpq.br/8202145341729196"},i.a.createElement("i",{class:"ai ai-lattes",style:{verticalAlign:"-20%",fontSize:"1.95em"}}))),i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:vitornotini@gmail.com"},i.a.createElement(j.a,null)))))))}}]),e}(n.Component),_=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={selectedMethod:0},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){}},{key:"handleMethodChange",value:function(){this.setState({selectedMethod:document.getElementById("solutionMethodSelect").selectedIndex})}},{key:"render",value:function(){var t,e=this,a=i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"inputAttemptsWithoutImprovement"},"Attempts Without Improvement:"),i.a.createElement("input",{type:"text",className:"mb-2 mr-sm-2",id:"inputAttemptsWithoutImprovement",defaultValue:"100",size:"1"}));return 1===this.state.selectedMethod?t=i.a.createElement("div",{id:"params"},i.a.createElement("label",{htmlFor:"inputTabuTenureSize"},"Tabu tenure size:"),i.a.createElement("input",{type:"text",className:"mb-2 mr-sm-2",id:"inputTabuTenureSize",defaultValue:"50",size:"1"}),a):2===this.state.selectedMethod&&(t=i.a.createElement("div",{id:"params"},i.a.createElement("label",{htmlFor:"inputParticlesCount"},"Particles:"),i.a.createElement("input",{type:"text",className:"mb-2 mr-sm-2",id:"inputParticlesCount",defaultValue:"25",size:"1"}),a)),i.a.createElement("div",{id:"leftMenu",className:"leftContainer"},i.a.createElement(O,null),i.a.createElement("div",{id:"content",className:"d-flex flex-column"},i.a.createElement("h2",null," Generate Graph "),i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement("label",{htmlFor:"inputVertices"},"Cities:"),i.a.createElement("input",{type:"text",id:"inputVertices",defaultValue:"100",style:{lineHeight:"1.15",fontSize:"small",width:"30px",height:"20px",marginRight:"2px"}}),i.a.createElement("button",{disabled:!!this.props.solving,style:{marginLeft:"0px",height:"20px",width:"25px",padding:0},onClick:function(){return e.props.onGenerateGraph(document.getElementById("inputVertices").value)},className:"btn btn-primary mb-2 btn-sm"},"Go")),i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement("label",{htmlFor:"solutionMethodSelect"},"Solution method:"),i.a.createElement("select",{style:{fontSize:"small",width:"100px",height:"20px",marginRight:"2px",padding:0},className:"form-control-sm",id:"solutionMethodSelect",onChange:this.handleMethodChange.bind(this)},i.a.createElement("option",null,"Local Search"),i.a.createElement("option",null,"Tabu Search"),i.a.createElement("option",null,"PSO")),i.a.createElement("button",{style:{marginLeft:"2px",height:"20px",width:"50",padding:0},disabled:!!this.props.solving,onClick:function(){e.props.onSolve(e.state.selectedMethod,e.props.onSolveCallback)},className:"btn btn-primary mb-2 btn-sm"},"Solve"," ")),0===this.state.params?"":t,i.a.createElement("div",{style:{height:"10px"}},this.props.solving?i.a.createElement(C,null):""),i.a.createElement(R,null)))}}]),e}(n.Component),T=(a(36),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"buildShowButton",value:function(t){var e,a,n,s=this,o=this.props.active[t]?"btn btn-success btn-sm":"btn btn-primary btn-sm";switch(t){case 0:var r=["Local Search",this.props.result.local.routeCost,this.props.result.local.elapsedTime];e=r[0],a=r[1],n=r[2];break;case 1:var l=["Tabu Search",this.props.result.tabu.routeCost,this.props.result.tabu.elapsedTime];e=l[0],a=l[1],n=l[2];break;case 2:var c=["PSO",this.props.result.pso.routeCost,this.props.result.pso.elapsedTime];e=c[0],a=c[1],n=c[2]}return i.a.createElement("div",{className:"d-sm-flex flex-row align-items-center"},i.a.createElement("div",{id:"resultValues"},i.a.createElement("p",{style:{fontWeight:"bold",padding:"0px",fontSize:"12px"}},e),i.a.createElement("a",{style:{fontSize:"12px"}}," ","Tour cost: "+a,"  "),i.a.createElement("a",{style:{fontSize:"12px"}},"Elapsed Time: ",n,"s")),i.a.createElement("button",{className:o,style:{marginRight:"0px"},onClick:function(){s.props.onShowResult(s.props.id,t)}},"Show"," ")," ")}},{key:"render",value:function(){var t=this,e=[this.buildShowButton(0),this.buildShowButton(1),this.buildShowButton(2)],a=e[0],n=e[1],s=e[2],o=i.a.createElement("button",{id:"deleteButton",className:"btn btn-danger input-block-level btn-sm",onClick:function(){t.props.onDeleteResult(t.props.id)}}," ","x"," ");return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"singleResult"},i.a.createElement("div",{className:"resultWrapper"},i.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(){t.props.onDisplayInitialRoute(t.props.id)}},"Initial Route"," ")," ",i.a.createElement("div",{className:"methodResult"},void 0!==this.props.result.local.routeCost?a:""),i.a.createElement("div",{className:"methodResult"},void 0!==this.props.result.tabu.routeCost?n:""),i.a.createElement("div",{className:"methodResult"},void 0!==this.props.result.pso.routeCost?s:""))),i.a.createElement("div",{style:{width:"3%",float:"right",height:"100%"}},o))}}]),e}(n.Component)),M=(a(38),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{id:"mainCanvas"}," ",i.a.createElement("div",{id:"graph"}," ",i.a.createElement("p",null," Graph not initialized! ")," "),i.a.createElement("div",{id:"results"}," ",i.a.createElement("h5",{style:{marginTop:"10px"}},"Results"),i.a.createElement("div",{className:"d-flex flex-row"},i.a.createElement("ul",{className:"list-group justify-content-between align-items-center"},this.props.results.map(function(e,a){return i.a.createElement("li",{className:"list-group-item",key:a,style:t.props.activeId===a?{backgroundColor:"#ccf3ff"}:{}},i.a.createElement(T,{result:e,id:a,active:t.props.activeId===a?t.props.active:[!1,!1,!1],onDeleteResult:t.props.onDeleteResult,onShowResult:t.props.onShowResult,onDisplayInitialRoute:t.props.onDisplayInitialRoute}))})))))}}]),e}(n.Component)),N=function t(e,a,n){Object(l.a)(this,t),this.initialRoute=e,this.coords=a,this.dist_matrix=n,this.local={route:[],routeCost:void 0,elapsedTime:void 0},this.tabu={route:[],routeCost:void 0,elapsedTime:void 0},this.pso={route:[],routeCost:void 0,elapsedTime:void 0}},D=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={coords:[],dist_matrix:[],canvas:null,graph:null,initialRoute:[],route:[],cities:void 0,solving:!1,test:void 0,results:[],graphId:-1,active:[!1,!1,!1]},a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.setState({graphWidth:document.getElementById("graph").clientWidth,graphHeight:document.getElementById("graph").clientHeight})}},{key:"defineActive",value:function(t){var e=Object(r.a)(this.state.active);return e.forEach(function(t,a){e[a]=!1}),-1!==t&&(e[t]=!0),e}},{key:"resetCanvasDiv",value:function(t){document.getElementById("graph").innerHTML=t?"<p> Graph not initialized! </p>":""}},{key:"handleDeleteResult",value:function(t){var e=Object(r.a)(this.state.results);e.splice(t,1);var a=-1;if(e.length>0)if(a=this.state.graphId-1,t===this.state.graphId){this.resetCanvasDiv();var n=new k(this.state.results[a].cities,this.state.results[a].coords,this.state.results[a].initialRoute,this.state.graphWidth,this.state.graphHeight);this.setState({graph:n,canvas:new m.a(n.s,document.getElementById("graph")),cities:this.state.results[a].cities,coords:this.state.results[a].coords,initialRoute:this.state.results[a].initialRoute,dist_matrix:this.state.results[a].dist_matrix,results:e,graphId:a,active:[!1,!1,!1]})}else this.setState({results:e,graphId:a});else this.resetCanvasDiv(!0),this.setState({graph:null,canvas:null,cities:[],coords:[],initialRoute:[],dist_matrix:[],results:e,graphId:a,active:[!1,!1,!1]})}},{key:"handleShowResult",value:function(t,e){var a;switch(e){case 0:a=this.state.results[t].local.route;break;case 1:a=this.state.results[t].tabu.route;break;case 2:a=this.state.results[t].pso.route}this.resetCanvasDiv();var n=new k(this.state.results[t].cities,this.state.results[t].coords,a,this.state.graphWidth,this.state.graphHeight),i=this.defineActive(e);this.setState({graph:n,canvas:new m.a(n.s,document.getElementById("graph")),cities:this.state.results[t].cities,coords:this.state.results[t].coords,initialRoute:this.state.results[t].initialRoute,dist_matrix:this.state.results[t].dist_matrix,graphId:t,active:i})}},{key:"handleGenerateGraph",value:function(t){for(var e=[],a=[],n=0;n<t;n++)e.push(n),a.push([Math.random()*this.state.graphWidth,Math.random()*this.state.graphHeight]);var i=new k(t,a,e,this.state.graphWidth,this.state.graphHeight);this.resetCanvasDiv();var s=v.assemble_dist_matrix(a),o=this.state.results.length,l=Object(r.a)(this.state.results);l.push(new N(e,a,s)),this.setState({route:e,initialRoute:e,dist_matrix:s,cities:t,coords:a,graph:i,canvas:new m.a(i.s,document.getElementById("graph")),solving:!1,graphId:o,results:l})}},{key:"handleDisplayInitialRoute",value:function(t){var e=new k(this.state.results[t].cities,this.state.results[t].coords,this.state.results[t].initialRoute,this.state.graphWidth,this.state.graphHeight);this.resetCanvasDiv(),this.setState({graph:e,canvas:new m.a(e.s,document.getElementById("graph")),cities:this.state.results[t].cities,coords:this.state.results[t].coords,initialRoute:this.state.results[t].initialRoute,dist_matrix:this.state.results[t].dist_matrix,graphId:t,active:[!1,!1,!1]})}},{key:"buildResult",value:function(t,e,a,n){var i=Object(r.a)(this.state.results)[this.state.graphId],s=Object(r.a)(this.state.results);if(0===t){var o=[e,a,n];i.local.route=o[0],i.local.routeCost=o[1],i.local.elapsedTime=o[2]}else if(1===t){var l=[e,a,n];i.tabu.route=l[0],i.tabu.routeCost=l[1],i.tabu.elapsedTime=l[2]}else if(2===t){var c=[e,a,n];i.pso.route=c[0],i.pso.routeCost=c[1],i.pso.elapsedTime=c[2]}return s[this.state.graphId]=i,s}},{key:"handleSolveCallback",value:function(t,e,a){if(this.state.coords.length>0){var n=new k(this.state.cities,this.state.coords,t,this.state.graphWidth,this.state.graphHeight);this.resetCanvasDiv();var i=this.buildResult(document.getElementById("solutionMethodSelect").selectedIndex,t,e,a);this.setState({graph:n,canvas:new m.a(n.s,document.getElementById("graph")),solving:!1,route:t,results:i})}}},{key:"handleSolve",value:function(t,e){var a=this;this.state.solving?console.log("Already solving!"):this.state.initialRoute.length>0&&this.setState({solving:!0},function(){switch(t){case 0:setTimeout(function(){w(a.state.initialRoute,a.state.dist_matrix,e)},1e3);break;case 1:setTimeout(function(){x(a.state.initialRoute,a.state.dist_matrix,document.getElementById("inputTabuTenureSize").value,document.getElementById("inputAttemptsWithoutImprovement").value,e)},1e3);break;case 2:setTimeout(function(){S(a.state.initialRoute,a.state.dist_matrix,document.getElementById("inputParticlesCount").value,document.getElementById("inputAttemptsWithoutImprovement").value,e)},1e3)}})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(_,{onGenerateGraph:this.handleGenerateGraph.bind(this),onSolve:this.handleSolve.bind(this),onSolveCallback:this.handleSolveCallback.bind(this),solving:this.state.solving}),i.a.createElement(M,{id:"mainCanvas",results:this.state.results,onDeleteResult:this.handleDeleteResult.bind(this),onShowResult:this.handleShowResult.bind(this),onDisplayInitialRoute:this.handleDisplayInitialRoute.bind(this),activeId:this.state.graphId,active:this.state.active}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[14,2,1]]]);
//# sourceMappingURL=main.b58b45ed.chunk.js.map