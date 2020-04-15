export declare type BufferEncoding = "utf8" | "binary" | "base64" | "base64url" | "hex" | string;
export declare class Convert {
    static ToString(buffer: BufferSource, enc?: BufferEncoding): string;
    static FromString(str: string, enc?: BufferEncoding): ArrayBuffer;
    static ToBase64(buffer: BufferSource): string;
    static FromBase64(base64Text: string): ArrayBuffer;
    static FromBase64Url(base64url: string): ArrayBuffer;
    static ToBase64Url(data: BufferSource): string;
    static FromUtf8String(text: string): ArrayBuffer;
    static ToUtf8String(buffer: BufferSource): string;
    static FromBinary(text: string): ArrayBuffer;
    static ToBinary(buffer: BufferSource): string;
    /**
     * Converts buffer to HEX string
     * @param  {BufferSource} buffer Incoming buffer
     * @returns string
     */
    static ToHex(buffer: BufferSource): string;
    /**
     * Converts HEX string to buffer
     *
     * @static
     * @param {string} hexString
     * @returns {Uint8Array}
     *
     * @memberOf Convert
     */
    static FromHex(hexString: string): ArrayBuffer;
    protected static Base64Padding(base64: string): string;
}
