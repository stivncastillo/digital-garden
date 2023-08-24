import type { CollectionEntry } from "astro:content";
export type GroupNoteType = {year: number; items: CollectionEntry<"notes">[]}

export function groupNotes(array: CollectionEntry<"notes">[]): Array<GroupNoteType> {
  const groups = array.reduce((result: any, note) => {
    const {data} = note;
    const year = new Date(data.updatedAt).getFullYear();
    const isGroupExisting: any = result.find((group: any) => group.year === year);

    if (isGroupExisting) {
      isGroupExisting.items.push(note);
    } else {
      result.push({ year: year, items: [note] });
    }

    return result;
  }, []);

  return groups;
}