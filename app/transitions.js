export default function() {
    this.transition(
        this.childOf('.container'),
        this.use('explode', {
            matchBy: 'data-id',
            use: 'fly-to'
        })
    );
}
