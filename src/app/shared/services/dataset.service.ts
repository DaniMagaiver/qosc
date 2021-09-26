import { DataSet } from './../models/DataSet.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataSetService{
    constructor(private http:HttpClient){}
    private _file = new BehaviorSubject<File>(new File([],""));
    private _originalDataSet = new Subject<DataSet>();
    private _reducedDataSet = new Subject<DataSet>();

    hasFile(){
        return this._file.pipe(switchMap(file => of(file.size > 0)));
    }

    publishDataSet(file:File){
        this._file.next(file);
    }

    public get file$(){
        return this._file.asObservable(); 
    }

    processOriginalDataSet(){
        
    }

    processReducedDataSet(){

    }

    public get originalDataSet$():Observable<DataSet>{
        return this._originalDataSet.asObservable();
    }

    public get reducedDataSet$():Observable<DataSet>{
        return this._reducedDataSet.asObservable();
    }
}