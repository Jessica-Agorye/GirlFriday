import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { ShoppingItem } from "../../pages/RequestPage";

type ShoppingListProps = {
  items: ShoppingItem[];
  setItems: Dispatch<SetStateAction<ShoppingItem[]>>;
};

const ShoppingList = ({ items, setItems }: ShoppingListProps) => {
  const addItem = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        name: "",
        quantity: 1,
        description: "",
        budget: "",
        image: null,
      },
    ]);
  };

  const removeItem = (id: number) => {
    if (items.length === 1) return;

    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (
    id: number,
    field: keyof ShoppingItem,
    value: string | number | File | null,
  ) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    );
  };

  const handleImageChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    const file = event.target.files?.[0] ?? null;

    if (!file) return;

    updateItem(id, "image", file);
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-400">
                Item {String(index + 1).padStart(2, "0")}
              </p>

              <h2 className="mt-1 text-lg font-semibold text-gray-950">
                What would you like us to find?
              </h2>
            </div>

            {items.length > 1 && (
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="text-sm font-medium text-gray-400 transition hover:text-red-600"
              >
                Remove
              </button>
            )}
          </div>

          <div className="mt-7 grid gap-6">
            {/* Item name */}
            <div>
              <label
                htmlFor={`name-${item.id}`}
                className="text-sm font-medium text-gray-800"
              >
                Item name
              </label>

              <input
                id={`name-${item.id}`}
                type="text"
                value={item.name}
                onChange={(event) =>
                  updateItem(item.id, "name", event.target.value)
                }
                placeholder="e.g. Ankara fabric"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-500"
              />
            </div>

            {/* Quantity + Budget */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={`quantity-${item.id}`}
                  className="text-sm font-medium text-gray-800"
                >
                  Quantity
                </label>

                <input
                  id={`quantity-${item.id}`}
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) =>
                    updateItem(
                      item.id,
                      "quantity",
                      Math.max(1, Number(event.target.value)),
                    )
                  }
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor={`budget-${item.id}`}
                  className="text-sm font-medium text-gray-800"
                >
                  Budget <span className="text-gray-400">(optional)</span>
                </label>

                <div className="mt-2 flex rounded-xl border border-gray-200 focus-within:border-gray-500">
                  <span className="flex items-center border-r border-gray-200 px-4 text-sm text-gray-400">
                    ₦
                  </span>

                  <input
                    id={`budget-${item.id}`}
                    type="number"
                    min="0"
                    value={item.budget}
                    onChange={(event) =>
                      updateItem(item.id, "budget", event.target.value)
                    }
                    placeholder="Your spending range"
                    className="min-w-0 flex-1 rounded-r-xl px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <label
                htmlFor={`description-${item.id}`}
                className="text-sm font-medium text-gray-800"
              >
                Details
              </label>

              <textarea
                id={`description-${item.id}`}
                rows={4}
                value={item.description}
                onChange={(event) =>
                  updateItem(item.id, "description", event.target.value)
                }
                placeholder="Brand, colour, size, preferred quality, or anything else that will help us identify the right item."
                className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-500"
              />
            </div>

            {/* Reference image */}
            <div>
              <label
                htmlFor={`image-${item.id}`}
                className="text-sm font-medium text-gray-800"
              >
                Reference photo{" "}
                <span className="text-gray-400">(optional)</span>
              </label>

              <p className="mt-1 text-sm text-gray-500">
                Have a photo of what you're looking for? Upload it here.
              </p>

              <label
                htmlFor={`image-${item.id}`}
                className="mt-3 flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-8 text-center transition hover:border-gray-500 hover:bg-white"
              >
                <div>
                  <div className="text-2xl">↑</div>

                  <p className="mt-2 text-sm font-semibold text-gray-700">
                    {item.image ? item.image.name : "Upload a reference photo"}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">JPG, PNG or WEBP</p>
                </div>

                <input
                  id={`image-${item.id}`}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(event) => handleImageChange(event, item.id)}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addItem}
        className="flex w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-5 text-sm font-semibold text-gray-700 transition hover:border-gray-500 hover:text-gray-950"
      >
        + Add another item
      </button>
    </div>
  );
};

export default ShoppingList;
