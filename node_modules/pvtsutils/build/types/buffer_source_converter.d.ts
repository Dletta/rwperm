export declare class BufferSourceConverter {
    static toArrayBuffer(data: BufferSource): ArrayBuffer;
    static toUint8Array(data: BufferSource): Uint8Array;
    static isBufferSource(data: any): data is BufferSource;
}
