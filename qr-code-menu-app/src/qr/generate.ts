import QRCode from 'qrcode';

export const generateQRCode = async (url: string): Promise<string> => {
    try {
        const qrCodeImageUrl = await QRCode.toDataURL(url);
        return qrCodeImageUrl;
    } catch (error) {
        throw new Error('Failed to generate QR code: ' + error.message);
    }
};