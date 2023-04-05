import {etherParse} from '../../test/helper';

export default {
    mainnet: {
        InflationController: [1000, '0x34c35136ECe9CBD6DfDf2F896C6e29be01587c0C'], // inflationRate, inflationDestination
        SQToken: [etherParse("10000000000")], // initial supply 10 billion
        Staking: [1209600], // LockPeriod
        Airdropper: ['0x34c35136ECe9CBD6DfDf2F896C6e29be01587c0C'], // settle destination
        EraManager: [604800], // 7 day
        ServiceAgreementRegistry: [1e6], //threshold
        PurchaseOfferMarket: [1e5, '0x34c35136ECe9CBD6DfDf2F896C6e29be01587c0C'],
        IndexerRegistry: [etherParse("16000")],
        ConsumerHost: [1], // Fee Percentage, default is 1%
        DisputeManager: [etherParse("10000")], // minimumDeposit
    },
    kepler: {
        InflationController: [1000, '0x34c35136ECe9CBD6DfDf2F896C6e29be01587c0C'], // inflationRate, inflationDestination
        SQToken: [etherParse("25000000")], // initial supply 25M
        Staking: [1209600], // LockPeriod
        Airdropper: ['0x34c35136ECe9CBD6DfDf2F896C6e29be01587c0C'], // settle destination
        EraManager: [604800], // 7 day
        ServiceAgreementRegistry: [1e6], //threshold
        PurchaseOfferMarket: [1e5, '0x34c35136ECe9CBD6DfDf2F896C6e29be01587c0C'], // penalty rate, penalty destination
        IndexerRegistry: [etherParse("16000")], // minimum staking
        ConsumerHost: [1], // Fee Percentage, default is 1%
        DisputeManager: [etherParse("10000")], // minimumDeposit
    },
    testnet: {
        InflationController: [1000, '0x4ae8fcdddc859e2984ce0b8f4ef490d61a7a9b7f'], // inflationRate, inflationDestination
        SQToken: [etherParse("10000000000")], // initial supply 10 billion
        Staking: [1000], // LockPeriod
        Airdropper: ['0x4ae8fcdddc859e2984ce0b8f4ef490d61a7a9b7f'], // settle destination
        EraManager: [3600], // 1 hour
        ServiceAgreementRegistry: [1e6], //threshold
        PurchaseOfferMarket: [1e5, '0x0000000000000000000000000000000000000000'],
        IndexerRegistry: [etherParse("1000")],
        ConsumerHost: [1], // Fee Percentage, default is 1%
        DisputeManager: [etherParse("10000")], // minimumDeposit
    },
    local: {
        InflationController: [1000, '0x4ae8fcdddc859e2984ce0b8f4ef490d61a7a9b7f'], // inflationRate, inflationDestination
        SQToken: [etherParse("10000000000")], // initial supply 10 billion
        Staking: [1000], // LockPeriod
        Airdropper: ['0x4ae8fcdddc859e2984ce0b8f4ef490d61a7a9b7f'], // settle destination
        EraManager: [60 * 60], // 1 hour
        ServiceAgreementRegistry: [1e6], //threshold
        PurchaseOfferMarket: [1e5, '0x0000000000000000000000000000000000000000'],
        IndexerRegistry: [etherParse("1000")],
        ConsumerHost: [1], // Fee Percentage, default is 1%
        DisputeManager: [etherParse("10000")], // minimumDeposit
    },
    moonbase: {
        InflationController: [1000, '0x4ae8fcdddc859e2984ce0b8f4ef490d61a7a9b7f'], // inflationRate, inflationDestination
        SQToken: [etherParse("10000000000")], // initial supply 10 billion
        Staking: [1000], // LockPeriod
        Airdropper: ['0x4ae8fcdddc859e2984ce0b8f4ef490d61a7a9b7f'], // settle destination
        EraManager: [60 * 60], // 1 hour
        ServiceAgreementRegistry: [1e6], //threshold
        PurchaseOfferMarket: [1e5, '0x0000000000000000000000000000000000000000'],
        IndexerRegistry: [etherParse("1000")],
        ConsumerHost: [1], // Fee Percentage, default is 1%
        DisputeManager: [etherParse("10000")], // minimumDeposit
    }
}