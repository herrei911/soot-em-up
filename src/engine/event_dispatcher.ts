module Engine
{
    export interface Map<TValue>
    {
        [name: string]: TValue;
    }


    export class EventDispatcher
    {
        private readonly subscribers: Map<{(): void}[]>;
        private readonly workItems: {(): string}[];

        constructor()
        {
            this.subscribers = {};
            this.workItems = [];
        }

        public doEvents(): boolean
        {
            if (this.workItems.length > 0)
            {
                let subscriber = this.workItems.pop();
                if (typeof subscriber != "undefined")
                {
                    subscriber();
                    return true;
                }
            }
            return false;
        }

        public raise(eventId: string): void
        {
            if (eventId in this.subscribers)
            {
                let list = this.subscribers[eventId];
                for (let index = 0; index < list.length; index++)
                {
                    let subscriber = list[index];
                    setTimeout(subscriber, 0);
                }
            }
        }

        public subscribe(eventId: string, subscriber: () => void | string)
        {
            if (subscriber)

            if (eventId in this.subscribers)
            {
                let list = this.subscribers[eventId];
                list.push(subscriber);
            }
            else
            {
                this.subscribers[eventId] = [subscriber];
            }
        }
    }
}