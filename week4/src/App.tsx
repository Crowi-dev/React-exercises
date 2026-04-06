import React, { useState } from 'react';
import Modal from './components/Modal';

// Part 1 data
const CAMPING_GEAR = [
  { id: 1, name: 'Tent', weight: 3500 },
  { id: 2, name: 'Sleeping Bag', weight: 1200 },
  { id: 3, name: 'Camping Stove', weight: 800 },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Part 2 state
  const [showInfo, setShowInfo] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const totalWeight = CAMPING_GEAR.reduce((sum, item) => sum + item.weight, 0);

  const openFirstModal = () => {
    setModalContent(
      <>
        <h3 className="text-2xl font-extrabold text-blue-700 mb-4">
          First popup with reusable Modal!
        </h3>
        <p className="text-gray-600 text-lg">
          This is content injected inside the modal!
        </p>
      </>
    );
    setShowInfo(true);
  };

  const openSecondModal = () => {
    setModalContent(
      <>
        <h3 className="text-[22px] font-extrabold text-green-600 mb-5 leading-snug pr-8">
          Second popup with same Modal component!!!
        </h3>
        <p className="text-gray-600 text-[22px] leading-relaxed">
          Content changes but the Modal is the same!
        </p>
      </>
    );
    setShowInfo(true);
  };

  return (
    <div className="p-8 min-h-screen">
      {/* Part 1 */}
      <h2 className="text-5xl font-extrabold mb-8">Camping Trip Summary</h2>

      <p className="text-4xl font-extrabold text-blue-700 mb-8">
        Backpack weight: {totalWeight} g
      </p>

      <button
        onClick={() => setIsOpen(true)}
        className="bg-zinc-900 text-white text-2xl px-8 py-5 rounded-md shadow hover:bg-zinc-800"
      >
        View Equipment
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-80">
            <h3 className="text-xl font-bold mb-4">Packed Items</h3>

            <ul className="mb-6 space-y-2">
              {CAMPING_GEAR.map((item) => (
                <li
                  key={item.id}
                  className="border-b pb-1 flex justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-gray-500">{item.weight} g</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-gray-200 text-gray-800 font-bold py-2 rounded hover:bg-gray-300"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* Part 2 */}
      <div className="mt-28">
        <h2 className="text-5xl font-extrabold mb-8">Modaalin testaus</h2>

        <div className="flex gap-1">
          <button
            onClick={openFirstModal}
            className="bg-blue-700 text-white text-2xl font-bold px-7 py-4 rounded-md border-2 border-blue-700 hover:bg-blue-800"
          >
            Näytä tiedot
          </button>

          <button
            onClick={openSecondModal}
            className="bg-green-700 text-white text-2xl font-bold px-7 py-4 rounded-md border-2 border-black hover:bg-green-800"
          >
            Näytä tiedot
          </button>
        </div>
      </div>

      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)}>
        {modalContent}
      </Modal>
    </div>
  );
}