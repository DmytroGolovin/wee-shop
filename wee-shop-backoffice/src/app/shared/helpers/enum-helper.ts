export class EnumHelper{
  // Turn enum into array
  public static enumToArray(enums: any) {
      return Object.keys(enums)
          .filter(value => isNaN(Number(value)) === false)
          .map(key => {
            return {
              key: key,
              value: enums[key]
            }
          });
  }
}
