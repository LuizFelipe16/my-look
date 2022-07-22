
export type ThemeFlexRow = {
  centerStart: string;
  centerEnd: string;
  startStart: string;
  startEnd: string;
  endEnd: string;
  endStart: string;
};

export type ThemeFlexColumn = {
  centerCenter: string;
  centerStart: string;
  centerEnd: string;
  startStart: string;
  startEnd: string;
  startCenter: string;
  endEnd: string;
  endStart: string;
  endCenter: string;
};

type ThemeFlex = {
  centerRow: string;
  centerColumn: string;
  row: ThemeFlexRow;
  column: ThemeFlexColumn;
}

export const flex: ThemeFlex = {
  centerRow: `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `,

  centerColumn: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `,

  row: {
    centerStart: `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    `,
    centerEnd: `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    `,
    startStart: `
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
    `,
    startEnd: `
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
    `,
    endEnd: `
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;
    `,
    endStart: `
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
    `,
  },

  column: {
    // NOTE alignJustify
    centerCenter: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
    centerStart: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `,
    centerEnd: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    `,
    startStart: `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    `,
    startEnd: `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
    `,
    startCenter: `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    `,
    endEnd: `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    `,
    endStart: `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
    `,
    endCenter: `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
    `,
  },
}