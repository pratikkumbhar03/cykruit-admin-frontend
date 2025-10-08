"use client";

import React from "react";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  confirmColor?: string;
  showInput?: boolean;
  inputLabel?: string;
  inputPlaceholder?: string;
  onCancel: () => void;
  onConfirm: (inputValue?: string) => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title,
  message,
  confirmLabel,
  confirmColor = "bg-blue-600 hover:bg-blue-700",
  showInput = false,
  inputLabel,
  inputPlaceholder,
  onCancel,
  onConfirm,
}) => {
  const [inputValue, setInputValue] = React.useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-medium mb-4">{title}</h2>
        <p className="mb-4 text-gray-700">{message}</p>

        {showInput && (
          <div className="mb-6">
            {inputLabel && (
              <label className="block text-sm font-medium mb-2 text-gray-700">
                {inputLabel}
              </label>
            )}
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={inputPlaceholder || "Enter reason..."}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              rows={3}
            />
          </div>
        )}

        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(inputValue)}
            disabled={showInput && !inputValue.trim()}
            className={`px-4 py-2 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${confirmColor}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
