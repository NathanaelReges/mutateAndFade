# mutateAndFade
mutateAndFade(&ensp;**element**,&ensp;&ensp;**mutateFunction**,&ensp;**options**,&ensp;&ensp;)<br/>

&ensp;&ensp;**element** &ensp; The element that you want to change.

&ensp;&ensp;**mutateFunction** &ensp; A function that receives an element and modifies it. This element may be the element you provided or a clone of it.

&ensp;&ensp;**options**&ensp; {&ensp;**duration**,&ensp;&ensp;**timingFunction**&ensp;}

<br/><br/>**Keep in mind:** 

The inline style of the provided element should be left blank to avoid conflict. The module uses this styles.


It's suggested to use a wrapper and then change the styles of the elements inside it. If you need to set the wrapper styles, make use of classes.
