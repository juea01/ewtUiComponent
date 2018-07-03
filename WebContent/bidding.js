/**
 * 
 */

require(['dojo/dom', 'dojo/_base/unload',"dojo/parser",'dojox/cometd',"dijit/form/Button","dijit/form/TextBox","dijit/dijit",'dojo/domReady!'],
function(dom, unloader,parser,cometd,Button,TextBox,dijit) 
{  
	
parser.parse();
	function _connectionEstablished()
	{
		dom.byId('body').innerHTML += '<div>CometD connection Established</div>';
	}
	
	function _connectionBroken()
	{
		dom.byId('body').innerHTML += '<div> CometD Connection Broken</div>';
	}
	
	function _connectionClosed() 
	{
		dom.byId('body').innerHTML += '<div>CometD connection Closed</div>';
	}
	
	
	//Function that manages the connection status with the Bayeux server
	var _connected = false;
	var productId = sessionStorage.getItem('productId');
	
	function _metaConnect(message)
	{
		
		if (cometd.isDisconnected())
		{
			_connected = false;
			_connectionClosed();
			return;
		}
		
		var wasConnected = _connected;
		_connected = message.successful === true;
		if (!wasConnected && _connected) {
			_connectionEstablished();
		}
		else if (wasConnected && !_connected)
		{
			_connectionBroken();
		}
			
	}
	
	function publish(value){
		cometd.publish('/service/bidding', {biddingValue: value,pId:productId }, function(publishReply)
				{
					if(publishReply.successful){
						// The message has reached the server
					}
			
				}); 	
	}
	
	// Function invoked when first contacting the server and 
	// when the server has lost the status of this client
	function _metaHandshake(handshake) {
		
		if (handshake.successful === true){
			
			
  
			cometd.batch(function()
			{
				
				cometd.subscribe('/bidding/'+productId, function(message)
				{
					dom.byId('currentBid').value =  "";
					dom.byId('currentBid').value =  message.data.biddingValue;
					dom.byId('biddingValue').value =  parseInt(message.data.biddingValue,10) + 1;
				});
				

				var biddingTextBox = new dijit.form.TextBox({
					name: "biddingValue",
					value: "",
					placeHolder: ""
				
				}, "biddingValue");
				
				var mySearchButton = new Button({
					
					onClick:function(){
						publish(dijit.byId('biddingValue').get('value'));
					}
				},"bidNowNode").startup();
				
				// publish on a service channel since the message is for the server only
				publish("100");
				
			});
		}
	}
	

	
	function _metaDisConnect(message) {
		
		if (message.successful){
			_connected = false;
		}
	}
	
	
	// Disconnect when the page unloads
	unloader.addOnUnload(function()
	{
		cometd.disconnect(true);
	});
	
	
	var cometURL = location.protocol + "//" + location.host + config.contextPath + "/cometd";
	cometd.configure({
		url: cometURL,
		logLevel: 'debug'
	});
	
	
	cometd.addListener('/meta/handshake', _metaHandshake);
	cometd.addListener('/meta/connect', _metaConnect);
	cometd.addListener('/meta/disconnect', _metaDisConnect);
	cometd.handshake();
	
	

});