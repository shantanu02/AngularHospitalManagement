import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Medicine{
  constructor(
    public medicineId: number,
    public medicineName: string,
    public medicineDesc:string,
    public medicineType:string,
    public pmTime:string,
  ){

  }
  


}


@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient: HttpClient) {

   }

   GetMedicineType(){
    return this.httpClient.get<String[]>("http://localhost:8080/medicines/medicinesType");
  }

  GetMedicinesByType(medicinesType:String){
    return this.httpClient.get<Medicine[]>("http://localhost:8080/medicines/getMedcinesByType/"+medicinesType);
  }

}
