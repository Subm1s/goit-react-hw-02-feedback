(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),o=n.n(i),r=(n(15),n(6)),s=n(7),l=n(8),d=n(10),u=n(9),b=(n(16),n(2)),j=n.n(b),h=n(0),O=function(e){var t=e.handleIncrement;return Object(h.jsxs)("div",{className:j.a.feedbackOptions,children:[Object(h.jsx)("button",{name:"good",className:j.a.incButton,type:"button",onClick:t,children:"Good"}),Object(h.jsx)("button",{name:"neutral",className:j.a.incButton,type:"button",onClick:t,children:"Neutral"}),Object(h.jsx)("button",{name:"bad",className:j.a.incButton,type:"button",onClick:t,children:"Bad"})]})},x=n(4),f=n.n(x),v=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:f.a.section,children:[Object(h.jsx)("h2",{className:f.a.title,children:t}),n]})},k=function(e){var t=e.good,n=e.bad,c=e.neutral,a=e.totalFeedback,i=e.positivePercentage;return Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",c]}),Object(h.jsxs)("li",{children:["Bad: ",n]}),Object(h.jsxs)("li",{children:["Total: ",a]}),Object(h.jsxs)("li",{children:["Positive percentage: ",i,"%"]})]})})},m=function(e){var t=e.message;return Object(h.jsx)("h3",{children:t})},g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,bad:0,neutral:0},e.handleIncrement=function(t){var n=t.target.name;e.setState((function(e){return Object(r.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.bad+t.neutral},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.bad,c=e.neutral;return Object(h.jsxs)("main",{children:[Object(h.jsx)(v,{title:"Please leave feedback",children:Object(h.jsx)(O,{handleIncrement:this.handleIncrement})}),Object(h.jsx)(v,{title:"Statistic",children:this.countTotalFeedback()<1?Object(h.jsx)(m,{message:"There is no feedback"}):Object(h.jsx)(k,{good:t,bad:n,neutral:c,totalFeedback:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.Component),p=g;n(18);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={incButton:"FeedbackOptions_incButton__NT5HK"}},4:function(e,t,n){e.exports={section:"Section_section__v7LMo",title:"Section_title__2fP77"}}},[[19,1,2]]]);
//# sourceMappingURL=main.1952fad9.chunk.js.map