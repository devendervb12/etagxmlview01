sap.ui.controller("view.MyView", {
	onInit : function(){
	//	this  -- controller
		var  oIp= this.getView().byId("eName");
		
		oIp.setValue("Surender");
	}
});