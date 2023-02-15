import type CONTRACTS from './contracts';

export type SubqueryNetwork = 'mainnet' | 'kepler' | 'testnet' | 'moonbase' | 'hardhat';

export type RevertCodes = {[key: string]: string}

export type HardhatDeploymentConfig = {
    readonly network: {
        name: SubqueryNetwork;
        endpoint?: string;
        platform: 'hardhat';
        providerConfig: {
            chainId: number;
            name: 'hardhat-local';
        };
    };
    readonly contracts: {[contract: string]: any[]};
};
export type MoonbeamDeploymentConfig = {
    readonly network: {
        name: SubqueryNetwork;
        endpoint?: string;
        platform: 'moonbeam';
        providerConfig: {
            chainId: number;
            name: 'moonbase-alpha' | 'moonbeam-river';
        };
    };
    readonly contracts: {[contract: string]: any[]};
};
export type AcalaDeploymentConfig = {
    readonly network: {
        name: SubqueryNetwork;
        endpoint?: {eth: string; substrate: string};
        platform: 'acala';
    };
    readonly contracts: {[contract: string]: any[]};
};

export type DeploymentConfig = AcalaDeploymentConfig | MoonbeamDeploymentConfig | HardhatDeploymentConfig;

export type ContractDeploymentDetail = {
    innerAddress?: string;
    address: string;
    bytecodeHash: string;
    lastUpdate: string;
};
export type ContractDeployment = Record<keyof typeof CONTRACTS, ContractDeploymentDetail>;

export type SdkOptions = {
    network?: SubqueryNetwork;
    deploymentDetails?: ContractDeployment;
};
