import { ProviderCrypto } from "../provider";
export declare abstract class RsaProvider extends ProviderCrypto {
    hashAlgorithms: string[];
    checkGenerateKeyParams(algorithm: RsaHashedKeyGenParams): void;
    checkImportParams(algorithm: RsaHashedImportParams): void;
    abstract onGenerateKey(algorithm: RsaHashedKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
    abstract onExportKey(format: KeyFormat, key: CryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    abstract onImportKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: RsaHashedImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
}
