const stockReducer: reducerFUnction<ProductStock> = function(
    state: ProductStock,
    action: Action
): ProductStock {
    const clonedState = {...state };
    switch (action.type) {
        case 'set':
            clonedState.stock = action.payload;
            break;
        case 'increment':
            clonedState.stock += action.payload;
            break;
        default:
            break;
    }
    return clonedState;
};
describe('WHEN: I get an increment', ()) => {
    const stockRxStore = new RxStore<ProductStock>(initial, stockReducer);
    const incrementAction: Action = { type: 'increment', payload: 5 };
    stockRxStore.dispatch(incrementAction);
    it('THEN: it should raise the stock', done => {
        stockRxStore.select$().subscribe(res => {
            expect(res).toEqual({ stock: 30});
            done();
        })
    })
}