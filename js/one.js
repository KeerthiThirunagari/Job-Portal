/*
 * This Script file contains library for common utility functions on client side
 * Author : Ram Awasthi (ram.awasthi@timesgroup.com)
 */

	function	checkForDuplicate(duplicateArrayElement,value)
		{
		 
	           checkVal = duplicateArrayElement;
	          
	           if(checkVal!=null)
	           {
	           if(checkVal==value)
	           {
	           return true;
	           }
	           }
	       }
		
function showselected(element,divId) {
	var type = element.type;
	var selectDynamicText = "<b>You have selected:</b><br>";
	var sz =0;
	var duplicateArray = new Array();
	if(type == 'select-multiple') {	
	    for(var c=0; c < element.options.length; c++) {
				if(element.options[c].selected == true) {
				var dupFlag = 0;
				for(i = 0; i < duplicateArray.length; i++)
	      {
	            if(dupFlag==1) break;
				if(checkForDuplicate(duplicateArray[i],element.options[c].value))
				{
				dupFlag = 1
				}
		  }
		  
		  if(dupFlag==1) continue;
				duplicateArray[duplicateArray.length]=element.options[c].value;
				    sz++;
					selectDynamicText += element.options[c].text+ '<br>';
				}
			}      			
	}

	if(type == 'select-one') {	
		sz = element.selectedIndex;
			if (sz > 0 ) {
				selectDynamicText += ' '+ element.options[sz].text;
			}
	}
	 	if(sz <= 0)	 	
            selectDynamicText = "";           
		 	writeContent(divId,selectDynamicText);
  }
  
 var nn4 = (document.layers) ? true : false
 var ie = (document.all) ? true : false

	function browser(id)
	{
		var layer = (nn4) ? document.layers[id] : (ie) ? document.all[id] : document.getElementById(id)
		return layer
	}
  
  function writeContent(id,text) 
	{
			var layer = browser(id)
			var content=text;

				if(nn4) {				
					layer.document.open()
					layer.document.write(content)
					layer.document.close()
					layer.visibility="visible"	
				}else {				
					layer.innerHTML = content
					layer.style.visibility="visible"
				}
		
	}
	
	function detectxss(form,message) {
		// We don't want to stop user on client side for entering html scripts
		 if(form !=null && form.elements != null && form.elements.length>0){	
		 	for(i=0; i<form.elements.length; i++) {
				var field = form.elements[i];
				if(field.type == 'text'||
				field.type == 'textarea') {
						 //Add below 2 also to detect xs attack
						///((\%3C)|<)((\%69)|i|(\%49))((\%6D)|m|(\%4D))((\%67)|g|(\%47))[^\n]+((\%3E)|>)/I 
						///((\%3C)|<)[^\n]+((\%3E)|>)/I
					var m = new RegExp('((\%3[cC])|<)((\%2[Ff])|\/)*[A-Za-z0-9\%]+((\%3[Ee])|>)');
					if (m.exec(field.value)) {
						alert(message + field.id);
						return false;
					}
			}
		}
		}
		return true;
	}
	
	function supressxss(form,field) {
		var value = form[field].value;
		//str.replace(/Microsoft/,"W3Schools")
		value = value.replace(RegExp("((\%3[cC])|<)","g"),'&lt;');
		value = value.replace(RegExp("((\%3[Ee])|>)","g"),"&gt;");
		form[field].value = value;
		alert(value);
		
	}
	
	
	
 function makeEnable(element1,element2)
 {
	var type = '';
	if(element1!=undefined && element1!=null)
		type=element1.type;
	// For Other location text box
	if(type == 'select-one' || type == 'select-multiple') {
		  var flag = false;
	      for(var c=0; c < element1.options.length; c++) {
	         if(element1.options[c].selected == true) {
				   if((element1.options[c].text).indexOf("Other") != -1 || (element1.options[c].title).indexOf("Other") != -1 )
						flag = true; 
			  }
	      }
		if(flag == true){
			document.getElementById(element2).style.display='';
		}else{   
			document.getElementById(element2).style.display = 'none';
			if(element2=="disptxtLocOther1"){
			if(document.getElementById('txtCurLocOther')!=undefined)
			   document.getElementById('txtCurLocOther').value = '';
			}else if(element2=="disptxtLocOther"){
				if(document.getElementById('txtPrefLocOther')!=undefined)
			    document.getElementById('txtPrefLocOther').value = '';
			}
		}	
	}
	if(document.getElementById("locationWidget") != null){
		if(document.getElementById("locationWidget").innerHTML == "granularLocation")
			document.getElementById("curLocation_error").style.display = 'none';
	}
  }
	
	
 function makeEnableInstitute(element1,element2)
 {

	var type = element1.type;
	// For Institute Ohter
	if(type == 'select-one') {
		if(element1.options[element1.selectedIndex].value == 300){
		document.getElementById(element2).disabled = false;
		document.getElementById(element2).style.backgroundColor = "white";
		document.getElementById(element2).focus()
		}
		else{
			document.getElementById(element2).value = "";
			document.getElementById(element2).style.backgroundColor = "#EFEBEA";
			document.getElementById(element2).disabled = true;
		}
	}
}

function makeEnableInstitute(element1,element2,element3)
 {
	var type = element1.type;
	// For Institute Ohter
	if(type == 'select-one') {
		if(element1.options[element1.selectedIndex].value == 300){
		document.getElementById(element2).style.display = '';
		//document.getElementById(element3).focus()
		}
		else{
			document.getElementById(element3).value = "";
			document.getElementById(element2).style.display = 'none';
			}
	}
}

function Trim(TRIM_VALUE){		
		if(TRIM_VALUE.length < 1){
			return"";
		}
		TRIM_VALUE = RTrim(TRIM_VALUE);
		TRIM_VALUE = LTrim(TRIM_VALUE);
		if(TRIM_VALUE==""){
			return "";
		}else{
			return TRIM_VALUE;
		}
	}
	function RTrim(VALUE){
		var w_space = String.fromCharCode(32);
		var v_length = VALUE.length;
		var strTemp = "";
		if(v_length < 0){
			return"";
		}
		var iTemp = v_length -1;
	
		while(iTemp > -1){
			if(VALUE.charAt(iTemp) == w_space){
			}else{
				strTemp = VALUE.substring(0,iTemp +1);
				break;
			}
			iTemp = iTemp-1;
		}
		return strTemp;
	}
	
	function LTrim(VALUE){
		var w_space = String.fromCharCode(32);
		if(v_length < 1){
			return"";
		}
		var v_length = VALUE.length;
		var strTemp = "";
		var iTemp = 0;
	
		while(iTemp < v_length){
			if(VALUE.charAt(iTemp) == w_space){
			}else{
				strTemp = VALUE.substring(iTemp,v_length);
				break;
			}
			iTemp = iTemp + 1;
		}
		return strTemp;
	}	
	
	function hideDiv(div){
		var divemement = document.getElementById(div);
		if (divemement != null) {
			divemement.style.display = 'none';
		}
	}
	
	function showDiv(div){
	var divemement = document.getElementById(div);
		if (divemement != null) {
			divemement.style.display = '';
		}
	}
	
	

				function addElement(sourceId,targetId,alt, otherId)
				{
				showDiv(targetId+'Show');
				var sourceIdName = document.getElementById(sourceId);
				var target = document.getElementById(targetId);
				removeAllOptionsList(targetId);
				var i;
				if(otherId == undefined){
					otherId='';
				}
				
				for(i=0;i<sourceIdName.options.length;i++)
				{
				var val = sourceIdName.options[i]
				var value = sourceIdName.options[i].value
				
				if(sourceIdName.options[i].selected)
				{
				var new_element = document.createElement('li');
				new_element.innerHTML = val.text+"<a href=\"javascript:removeOptionsList('"+sourceId+"','"+targetId+"','"+value+"','"+otherId+"');\"><cite>&nbsp;</cite></a>";
				new_element.setAttribute('id', value);
				
				
				target.insertBefore(new_element, target.firstChild);
				}
				
				}
				
				}




				function removeOptionsList(sourceId,targetId,id, otherid)
				{
				  
					var i;		
						  
				var target = document.getElementById(targetId);
				
				for(i=0;i<target.childNodes.length;i++)
				{
				
				if(target.childNodes[i].id==id)
				{
				target.removeChild(target.childNodes[i]);
				
				deSelected(sourceId,id);
				
				}
				}
				
				if(otherid != undefined && otherid!=''){
					var source = document.getElementById(sourceId);
					
					makeEnable(source,otherid); 
				}
				 
				 
				}
				
				
				
				function removeAllOptionsList(targetId)
						{
						
						var target = document.getElementById(targetId);
						
						while (target.hasChildNodes())
							{
							  target.removeChild(target.firstChild);
							}
						
						
						}
				
				function deSelected(sourceId,value)
				{
				
				var i;
				 var unselectbox = document.getElementById(sourceId);
				 var flag = false; 
				for(i=0;i<unselectbox.options.length;i++)
				{
				if(unselectbox.options[i].selected && unselectbox.options[i].value==value)
				{
				unselectbox.options[i].selected=null;
				}
				if(unselectbox.options[i].selected){
					flag = true;
				}
				}
				
				if(flag){
					showDiv(sourceId+"TargetShow");
				} else {
					hideDiv(sourceId+"TargetShow");
				}
				}
						
              function changeBorderColor(id)
				{
				
					var field = id;//document.getElementById(id);
					
					if (field.type == 'text' ||
						field.type == 'textarea' ||
						field.type == 'select-one' ||
						field.type == 'select-multiple')
						{
						var value = '';
						
						if(field.type == "select-multiple") {
							var sl = 0;
							for(var c=0; c< field.options.length; c++) {
								//alert(field.options[c].value);
								if(field.options[c].selected == true && (field.options[c].value != "-1")) {
								sl++;
							}
						}

						if(sl > 0) {
							value = field.value;
						} else {
							value = "";
						}

					} else 	if (field.type == "select-one") {

							var si = field.selectedIndex;
							if (si >= 0) {
								value = field.options[si].value;
								if(value == -1) {
									value = "";
								}
							}
					} else {
						value = field.value;					
					}
                    
				if ((this.trim(value)).length == 0) {
					field.style.border = "2px solid #c153a5";
					
				}
				else
				{
			
				field.style.border ="1px solid #7F9DB9";
					

				}
				
		}	
	}
					
function changeLabelColor(id, labelId)
{

	var field = document.getElementById(id);
				
	if (field!=null && (field.type == 'text' ||
				field.type == 'textarea' ||
				field.type == 'select-one' ||
				field.type == 'select-multiple'))
				{
					var value = '';
						
					if(field.type == "select-multiple") {
						var sl = 0;
						for(var c=0; c< field.options.length; c++) {
								//alert(field.options[c].value);
							if(field.options[c].selected == true && (field.options[c].value != "-1")) {
								sl++;
							}
						}

						if(sl > 0) {
							value = field.value;
						} else {
							value = "";
						}
					} else 	if (field.type == "select-one") {

							var si = field.selectedIndex;
							if (si >= 0) {
								value = field.options[si].value;
								if(value == -1) {
									value = "";
								}
							}
					} else {
						value = field.value;					
					}
                    
				if ((this.trim(value)).length == 0) {
				 var label =  document.getElementById(labelId);
				 label.style.color = "#c153a5";
				 label.style.fontWeight="bold";
				 field.style.border = "2px solid #c153a5";				 		
				}	else {
								field.style.border ="1px solid #7F9DB9";
				}						
		}	else {
					var label =  document.getElementById(labelId);
				 label.style.color = "#c153a5";	
				 label.style.fontWeight="bold";		
		}					
}


function changeLabelColorEdit(id, labelId)
{

	var field = document.getElementById(id);
	var label =  document.getElementById(labelId);
	
	label.style.color = "#c153a5";
	label.style.fontWeight="bold";
	field.style.border = "2px solid #c153a5";					
}                
	/*function changeLabelColor(id, labelId)
				{
				
					var field = document.getElementById(id);//document.getElementById(id);
					//alert(field.id);
					if (field.type == 'text' ||
						field.type == 'textarea' ||
						field.type == 'select-one' ||
						field.type == 'select-multiple')
						{
						//alert('filed.value'+field.value);
						 var value = field.value;
						 if(value==null || value=="1" || value=="-1")
						 {
						 
						 // var labelId = field.id + "Label";
						 //  alert(labelId);
						 var label =  document.getElementById(labelId);
						// alert(label);
						 // alert(label.id);
						 label.style.color = "#eec826";
						 
						 }
			}
			}
				
		*/		
		function showInd(ind, indChild,targetIndus)
		{
		
		//alert("ind="+ind+" indChild=="+indChild+" div"+targetIndus);
		var sfield = document.getElementById(ind);
		//var scond = document.getElementById(indChild);
		//var scond = document.forms.registrationStep2Form.indusSel;
		//var scond = document.forms.postResumeFormBean.indusSel;
		var scond=indChild;
		var target = document.getElementById(targetIndus);
		removeAllOptionsList(targetIndus);
		var fun= new Array();
		var val=new Array();
		//var indChild=new Array(25);
		var check=new Array();
		var j=0;
		var flag=false;
		var str2="";
		var m=0;
		var n=0;
		
		showDiv('indusTargetShow');
		for (var i=0;i<sfield.length;i++)
		{
		if(sfield.options[i].selected)
		{
		fun[j]=sfield.options[i].value;
		val[j] = i;
		++j;
		}
		}
		
		for(var falen=0; falen<fun.length; falen++)
		{
		var fasel = fun[falen];
		// creating ul
		var new_ULElement = document.createElement('ul');

		var valueUL = sfield.options[val[falen]].value;
		
		//alert(" indChild "+indChild);
		new_ULElement.innerHTML = sfield.options[val[falen]].text+"<a href=\"javascript:removeIndOption('"+ind+"','"+indChild+"','"+targetIndus+"','"+valueUL+"');\"><cite>&nbsp;</cite></a>";
		
		new_ULElement.setAttribute('id', valueUL);
		// end creating ul
		
					//alert(scond.length);
							//alert(scond.checked);
		for (var i=0;i<scond.length;i++)
		{
		//alert("ram");
		if(scond[i] != undefined && scond[i].checked == true) {
		//alert("st="+scond[i].value);
			var st=scond[i].value;
			var st1=st.substring(0,2);
//			var st1=st.
	
			//alert("fasel="+fasel);
		if(st1 == fasel)			
		{
		// creating li
		//alert("st1=after"+st1);
		var new_LIElement = document.createElement('li');
		new_LIElement.style.fontWeight='normal';
		//alert("value="+scond[i].value);
		var valueLI = scond[i].value;
		//alert("valueLI="+valueLI);
		//alert("value txt="+scond[i].title);
		new_LIElement.innerHTML = scond[i].title+"<a href=\"javascript:removeIndOption('"+ind+"','"+indChild+"','"+targetIndus+"','"+valueLI+"');\"><cite>&nbsp;</cite></a>";
		
		new_LIElement.setAttribute('id', valueLI);
		new_ULElement.appendChild(new_LIElement);
		// end creating li
		}
		}
		
		}
		target.insertBefore(new_ULElement, target.firstChild);
		}
		return true;
		}

		function removeIndAllOption(targetIndus)
		   {
			var i; 
	       	var target = document.getElementById(targetIndus);
		
		   for(i=0;i<target.childNodes.length;i++)
		  {
		         var currentNode = target.childNodes[i];
		      //   alert('currentNode.nodeName='+currentNode.nodeName);
		  
		     if(currentNode.nodeName == "UL")
		       {
		       //alert('Node is UL'+currentNode.childNodes.length);
		        	       
		         for(j=0;j<currentNode.childNodes.length;j++)
		        {
		         var currentChildNode = currentNode.childNodes[j];
		         //alert('currentChildNode name = '+ currentChildNode.nodeName);
		         if(currentChildNode.nodeName == "LI")
					   {					   
					   currentNode.removeChild(currentNode.childNodes[j]);
					   removeIndAllOption(targetIndus);
					   }		                           
		        }	         
		  		}
		 
		 }

	}
          
			function removeIndOption(ind,indChild,targetIndus,id)
		   {
		  
			var i;
		   
	       	var target = document.getElementById(targetIndus);
			
			
			var elementToBeDeleted = document.getElementById(id);
			var parentElementOfNodeToBeDeleted = elementToBeDeleted.parentNode;
			var parentId = parentElementOfNodeToBeDeleted.getAttribute('id');
			parentElementOfNodeToBeDeleted.removeChild(elementToBeDeleted);
			if (parentId == targetIndus) {
				var parentOfParentElement = parentElementOfNodeToBeDeleted.parentNode;
				parentOfParentElement.removeChild(parentElementOfNodeToBeDeleted);
				parentOfParentElement.style.display = 'none';
			}
		
		  /* for(i=0;i<target.childNodes.length;i++)
		  {
		         var currentNode = target.childNodes[i];
		     if(currentNode.nodeName == "UL")
		       {
		       
		       if(currentNode.id==id)
		         {
				 var j=0;
		         for(j=0;j<currentNode.childNodes.length;j++)
		        {
		         var currentChildNode = currentNode.childNodes[j];
		          currentNode.removeChild(currentNode.childNodes[j]);                    
		        }	         
		         target.removeChild(currentNode);
		         deSelectIndParentChild(ind,indChild,id);
		         }		// if ends
		         else if(id.length>2)
			         {       
			       // ind deletion ends
			     //  alert('child nodes inside ul' + currentNode.childNodes.length);
			            deleteChildNodesRecursively(currentNode.id,id,indChild);
                  
			       }// ELSEIF ends
		     } // top if ends
		  }*/
		 
		 }

	function	 deleteChildNodesRecursively(id,idToBeDeleted,indChild)
		 {
		 	var node = document.getElementById(id);
		 	//alert("node="+node+" node.hasChildNodes()="+node.hasChildNodes()+" idToBeDeleted="+idToBeDeleted+" indChild="+indChild);
              if(node!=null && node.hasChildNodes())
			  {
			  var i=0;
			     for(i=0;i<node.childNodes.length;i++)
			       {
				     var childNode = node.childNodes[i];
					 if(childNode.nodeName == "LI")
					   {
					 var childNodeId= childNode.id;
					 deleteChildNodesRecursively(childNodeId,idToBeDeleted,indChild);
					       	 if(childNodeId==idToBeDeleted)
								{
								  node.removeChild(childNode);
								  //  alert('ind'+ind + '  indChild'+indChild + ' id '+id);
							   	  deSelectIndChild(indChild,idToBeDeleted);
								 }
						}
				   }
			  }
		 
		 
		 }
		
		function deSelectIndParentChild(ind, indChild,value)
				{
				//alert('deSelectIndParentChild');
				//alert('ind'+ind);
				var i;
				var flag = false; 
				 var faAll = document.getElementById(ind);
				  
				for(i=0;i<faAll.options.length;i++)
				{
				if(faAll.options[i].selected && faAll.options[i].value==value)
				{
					faAll.options[i].selected=null;
					
				deSelectIndChildInInd(indChild,value);			
				}
				
				if(faAll.options[i].selected){
					flag = true;
				}	
				
				}
				
				if(flag){
					showDiv('indusTargetShow');
				} else {
					hideDiv('indusTargetShow');
				}
				
				}
              function   deSelectIndChild(indChild,value)
                {               
                
		                //var scond = document.getElementById('indsel');
		               var scond = document.forms.registrationStep2Form.indusSel;
		              // var scond = indChild;
		              //  alert("deSelectIndChild="+scond+" value="+value+" scond="+scond.length);
						//alert("scond=="+scond.id);
						for (var i=0;i<scond.length;i++)
						{
							//alert("check=="+scond[i].selected);
							if(scond[i].checked)
							{
							var st1=scond[i].value;
					        //      alert("st1=="+st1);
							
							if(st1 == value)
							{		
						//	alert("st1=="+st1);	
							scond[i].checked=false;
							}
							}
				        }
                }

     function   deSelectIndChildInInd(indChild,value)
     {               
                
         //var scond = document.getElementById(indChild);
          var scond = document.forms.registrationStep2Form.indusSel;
        //   var scond = indChild;
		//alert("deSelectIndChildInInd="+scond);
		for (var i=0;i<scond.length;i++)
		{
			if(scond[i].checked)
			{
			var st1=scond[i].value;
	              
			 st1=st1.substring(0,2);
	        	
			if(st1 == value)
			{			
			scond[i].checked=false;
			}
			}
         }
    }
                
                
function changeColorDesc(name, labelId)
{
	var form = document.getElementById('registrationStep2Form');
	var field = form[name];
	var value = field.value;
	
	if ((this.trim(value)).length == 0) {
				//alert("inside "+value);
				 var label =  document.getElementById(labelId);
				 label.style.color = "#c153a5";
				 label.style.fontWeight="bold";
				 field.style.border = "2px solid #c153a5";				 		
	}	else {
								field.style.border ="1px solid #7F9DB9";
	}			
}          

	/*Show Selected values for Multiselect JavaScript */	
	function showMultiSelect(element,divId) {
		var selectDynamicText = "<b>You have selected:</b><br>";
		var sz =0;
		var display="";
		var othindex=0;
		if(element != undefined){
			if(element[0] != undefined && element[0].type == 'checkbox'){
				for (var x=0; x<element.length; x++) {
					if(element[x] != undefined && element[x].checked == true) {
					
						othindex=(element[x].title).indexOf("|");
						if(othindex>0)
						{
							display=(element[x].title).substr(0,othindex);
						}
						else
						{
							display=element[x].title;
						}
						//alert(display);
						sz++;
						selectDynamicText += display+ '<br>';
					}else if(element.type == 'checkbox' && element.checked == true){
						sz++;
						selectDynamicText += element.title+ '<br>';
						break;
					}	
				}
			} 	
		}
		if(divId == 'locSel'){
			displayOther(element,'textLocationOther');
		}
		if(divId == 'industrySel'){
			displayOther(element,'textInstitute1Other');
		}
		if(divId == 'industry2Sel'){
			displayOther(element,'textInstitute2Other');
		}
		//Remove Selected text
	 	if(sz <= 0)	selectDynamicText = "";
		writeContent(divId,selectDynamicText);
	 }     
	 
	function removeOptionsOne(dropId, valueId){
		var optObj =document.getElementById(dropId);
				
		for (var i=0 ; i<optObj.options.length; i++){
			if(optObj.options[i].value == valueId){
				optObj.remove(i);				
			}
		}
	}
	
	function addOptionsOne(dropId, valueId, value){
		var optObj =document.getElementById(dropId);
		
		var objOption=document.createElement("option");
		objOption.innerHTML = value;
		objOption.value = valueId;
		optObj.appendChild(objOption);		
	}
	
	function cleanValueText(formfieldId){
		var formfield = document.getElementById(formfieldId);
		formfield.value = "";
 	}
	
	
	function resetDropDown(formfieldId){
		var postOptions = document.getElementById(formfieldId);    
		postOptions.options[0].selected = true;
	}
	
	function resetEmployers(){
	
	
	for (var i=1; i<=4;i++)
    {
    	cleanValueText('prevEmpName'+i);
		cleanValueText('prevEmpDesignation'+i);
		maxValueSelected('prevEmpStartMonth'+i, '-1');
        maxValueSelected('prevEmpStartYear'+i, '-1');
        maxValueSelected('prevEmpEndMonth'+i, '-1');
        maxValueSelected('prevEmpEndYear'+i, '-1');
    }
		
	}
	
	
	//added by manoranjan
	
	function removeOptionM(id)
	{
	       var optionChoices = document.getElementById(id);
	       for (var i=(optionChoices.options.length-1); i>=0; i--){
	               if(optionChoices.options[i].value!= -1)
	                       optionChoices.remove(i);
	       }                        
	}


function addOptionsM(selectElm, dataArray)
	{
	       for (var i in dataArray){
	               var valueText = dataArray[i];
	               var objOptionElm = document.createElement('option');
	               objOptionElm.text = valueText;
	               objOptionElm.value = valueText;                
	               try {
	               	selectElm.add(objOptionElm,null);
	               } catch(ex) {
	               	selectElm.add(objOptionElm);
	               }
	       }
	}
 function setSearchParam(){
	//alert('setSearchParam');
	ajaxController.getProfileDataForSerachForm(function(data){			
			if(data !=null)
			 {
				//alert('exp = '+data[0] + ' func '+ data[1] + ' loc = '+data[2])	
				if(data[0] !=null && data[0] !='' && document.getElementById("cboWorkExp1") != undefined)
					document.getElementById("cboWorkExp1").value = data[0];	
				if(data[1] !=null && data[1] !=''){
					var id= "cboPresFuncArea_"+data[1];
					if(document.getElementById(id) != undefined){
						document.getElementById(id).checked = true;
						checkboxlimit(document.forms.quickSearchBean.cboPresFuncArea,"Functional areas", 3, "textFunctionalArea","",document.getElementById(id));
					}				
				}
				if(data[2] !=null && data[2] !='' && document.getElementById("txtLocation") != undefined)
					document.getElementById("txtLocation").value = data[2];		 
			 } 				
		  }
		);
	}
 /** As per our requirement i put data in array of map*/
 function makeArrayOfData(data,delimeter){
 var tempData=[];
 //alert("datat---"+data);
 if(delimeter!='' && delimeter!='undefined' && delimeter!=null && data!=null && data!=''){
	 //data=data.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '');
 	var newData=Trim(data).split(delimeter);
 	var counter=0;
 	if(newData!='' && newData!='undefined'){
 		//for(q in newData){
 			for(var q=0;q < newData.length; q++){
 			//console.log("Loop value start-"+q);
 			if(newData[q]!='' && Trim(newData[q])!='' && newData[q]!=','){
 				//console.log("Loop value after null check--"+q);
 				tempData[counter]={name:newData[q],id:newData[q]};
 				counter++;
 			} 			
 		}
 		return tempData;
 	}
 	//alert("final tempData"+tempData);
 }
 //alert("final tempData2"+tempData);
 }
  
 function addElementNew(sourceId,targetId,alt, otherId)
 {
	//alert('common util addElementNew 222');
	showDiv(targetId+'Show');
	var sourceIdName = document.getElementById(sourceId);
	var target = document.getElementById(targetId);
	removeAllOptionsList(targetId);
	var i;
	if(otherId == undefined){
		otherId='';
	}
	var allSelList='';
	for(i=0;i<sourceIdName.options.length;i++)
	{
		var val = sourceIdName.options[i]
		var value = sourceIdName.options[i].value
		//alert(allSelList.indexOf(val));
		if(sourceIdName.options[i].selected)
		{
			//alert(allSelList);
			//alert(value);
			//alert(allSelList.indexOf(value));
			if(allSelList.indexOf(value) == -1){
			var new_element = document.createElement('li');
			new_element.innerHTML = val.text+"<a href=\"javascript:removeOptionsList('"+sourceId+"','"+targetId+"','"+value+"','"+otherId+"');\"><cite>&nbsp;</cite></a>";
			new_element.setAttribute('id', value);
			target.insertBefore(new_element, target.firstChild);
			allSelList = allSelList +','+ value; 
			//alert(allSelList);
			
			}
		}
	}
	
	}