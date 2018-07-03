
package cometd.Dojo;

import java.util.Map;
import java.util.HashMap;

import org.cometd.bayeux.server.BayeuxServer;
import org.cometd.bayeux.server.ServerMessage;
import org.cometd.bayeux.server.ServerSession;
import org.cometd.server.AbstractService;

public class BiddingService extends AbstractService {
    public BiddingService(BayeuxServer bayeux) {
        super(bayeux, "bidding");
        addService("/service/bidding", "processBidding");
    }

    public void processBidding(ServerSession remote, ServerMessage message) {
        Map<String, Object> input = message.getDataAsMap();
        String value = (String)input.get("biddingValue");
        String productId = (String)input.get("pId");

        Map<String, Object> output = new HashMap();
        output.put("biddingValue", value);
        //remote.deliver(getServerSession(), "/hello", output, null);
        getBayeux().getChannel("/bidding/"+productId).publish(getServerSession(), output,null);
    }
}
