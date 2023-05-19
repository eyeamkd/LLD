/**
 * Suppose you are designing a music player application that can play different types of audio files, such as MP3, WAV, and FLAC. 
 * The application consists of a user interface module, 
 * a media playback module, and a file format support module.
 * 
 * The media playback module depends on the file format support module to decode and play the audio files. 
 * However, the file format support module contains implementation details that are specific to each file format
 *  (e.g. decoding algorithms, metadata parsing), which can make it difficult to modify or extend the application in the future.

How would you apply the Dependency Inversion Principle to design the interfaces and classes for the music player application,
and ensure that the media playback module depends on abstractions rather than concrete implementations of the file format
support module?
 */

//------------------------------------------------------------------------------------------------------// 

/**
 * Features 
 * 1. PlayAudio 
 *  
 * Modules
 * 1. UI
 * 2. PlayBack 
 * 3. FileFormatSupport 
 */ 

interface IFile {
    Type: String; 
    Size : Number; 
    CreatedOn : EpochTimeStamp; 
    ModifiedOn : EpochTimeStamp; 
    CreatedBy : String;
    ModifiedBy : String;
    Data : any;
}

interface IEncodedFile extends IFile {
    Coding : 'Encoded'
}

interface IDecodedFile extends IFile {
    Coding : 'Decoded'
}


interface IUserInterface{

} 

interface IPlayBack{
    Play(file: IDecodedFile):any
}

interface IFileFormatSupport{
    DecodeFile(file: IFile) : IDecodedFile
}

class MediaPlayBack implements IPlayBack {

    private readonly FileFormatSupport : IFileFormatSupport;
    private readonly File: IFile;

    constructor(encodedFile : IFile, fileformatSupport: IFileFormatSupport) {
        this.FileFormatSupport = fileformatSupport;
        this.File = encodedFile;
        const decodedFile = this.FileFormatSupport.DecodeFile(this.File);  
        this.Play(decodedFile);
    }
    Play(file:IDecodedFile) {
       // play file
    }
}




