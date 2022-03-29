
import { Subscription } from 'rxjs';

export class SubscriberContainer {
    public subs = [];

    set add(s: Subscription) {
        this.subs.push(s);
        console.log("test", this.subs)
    }

    dispose() {
        this.subs.forEach(s => s.unsubscribe());
        console.log("data unsub", this.subs);
    }
}