/*
*   cNumber: unique identifier of cargo container
*   cWeight: amount in pounds
*   cDestination: where is the cargo container flying to
*   destinationColor: color code different states
*   cPosition: position in the map
*   cRow: Row number
*   cType: ?
*   hasContainer: ?
*   cShape: shape of the container 3 to 4 letters
*
* */

export class Container{
  
  constructor(  private cNumber: number,
                private cWeight: number,
                private cDestination: string,
                private destinationColor: string,
                private cPosition: string,
                private cRow: string,
                private cType: string,
                private hasContainer: boolean,
                private cShape: string){

    this.cNumber = cNumber;
    this.cWeight = cWeight;
    this.cDestination = cDestination;
    this.destinationColor = destinationColor;
    this.cPosition = cPosition;
    this.cRow = cRow;
    this.cType = cType;
    this.hasContainer = hasContainer;
    this.cShape = cShape;
  }

  
}
