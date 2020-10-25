import otcStore from './otc';
// const cnstore = new cnStore();
const RootStore = {
    otc: new otcStore(),
    // ...other stores
};
export default RootStore;
