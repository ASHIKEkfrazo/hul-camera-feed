import React, { useEffect, useState } from 'react'
import { Table, Button, Input } from 'antd';
import { UploadOutlined, FileOutlined, DeleteOutlined } from "@ant-design/icons";
import { Modal }
  from
  "antd"
  ;
import ModalComponent from "../Components/Modal"

import { reportDataAPI, searchDataApi } from '../Endpoints/reportApi';
import { RedoOutlined } from '@ant-design/icons';
import { set } from 'react-hook-form';

const Reports = () => {
  const { Search } = Input;
  const [reportData, setReportData] = useState([])
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState();
  const [searchActive, setSearchActive] = useState(false);


  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
    position: ["topRight"],
    showSizeChanger: true,
  })

  const columns = [
    {
      title: 'SL.NO',
      dataIndex: 'id',
      onHeaderCell: () => {
        return {
          style: {
            backgroundColor: "#006768", // Set your desired background color
            color: "#fff", // Optional: change text color
            fontWeight: "bold", // Optional: make the text bold

          },
        };

      },
      onCell: () => {
        return {
          style: {
            fontWeight: "500", // Set font weight for body cells
          },
        };
      },
      render: (index, item) => index
    },
    {
      title: 'Date',
      dataIndex: 'order_date',
      onHeaderCell: () => {
        return {
          style: {
            backgroundColor: "#006768", // Set your desired background color
            color: "#fff", // Optional: change text color
            fontWeight: "bold", // Optional: make the text bold
          },
        };
      },
      onCell: () => {
        return {
          style: {
            fontWeight: "500", // Set font weight for body cells
          },
        };
      },
      // sorter: {
      //   compare: (a, b) => a.chinese - b.chinese,
      //   multiple: 3,
      // },
    },
    {
      title: 'Order ID',
      dataIndex: 'order_id',
      onHeaderCell: () => {
        return {
          style: {
            backgroundColor: "#006768", // Set your desired background color
            color: "#fff", // Optional: change text color
            fontWeight: "bold", // Optional: make the text bold
          },
        };
      },
      onCell: () => {
        return {
          style: {
            fontWeight: "500", // Set font weight for body cells
          },
        };
      },
      // sorter: {
      //   compare: (a, b) => a.math - b.math,
      //   multiple: 2,
      // },
    },
    {
      title: 'Person Incharge',
      dataIndex: 'person_incharge',
      onHeaderCell: () => {
        return {
          style: {
            backgroundColor: "#006768", // Set your desired background color
            color: "#fff", // Optional: change text color
            fontWeight: "bold", // Optional: make the text bold
          },
        };
      },
      onCell: () => {
        return {
          style: {
            fontWeight: "500", // Set font weight for body cells
          },
        };
      },
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
    },
    {
      title: 'Test Parameters',
      dataIndex: 'test_parameter',
      onHeaderCell: () => {
        return {
          style: {
            backgroundColor: "#006768", // Set your desired background color
            color: "#fff", // Optional: change text color
            fontWeight: "bold", // Optional: make the text bold
          },
        };
      },
      onCell: () => {
        return {
          style: {
            fontWeight: "500", // Set font weight for body cells
          },
        };
      },
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
    },
    {
      title: 'File',
      dataIndex: 'file',
      onHeaderCell: () => {
        return {
          style: {
            backgroundColor: "#006768", // Set your desired background color
            color: "#fff", // Optional: change text color
            fontWeight: "bold", // Optional: make the text bold
          },
        };
      },
      onCell: () => {
        return {
          style: {
            fontWeight: "500", // Set font weight for body cells
          },
        };
      },
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
      render: (item) => <div className="">
        {
          item ?
            <a href={item} target='_blank'><FileOutlined style={{ color: "red", fontSize: "1.2rem" }} /></a>
            : <div className="">No file</div>
        }


      </div>
    },
    {
      title: 'Action',
      dataIndex: 'action',
      onHeaderCell: () => {
        return {
          style: {
            backgroundColor: "#006768", // Set your desired background color
            color: "#fff", // Optional: change text color
            fontWeight: "500", // Optional: make the text bold
          },
        };
      },
      onCell: () => {
        return {
          style: {
            fontWeight: "500", // Set font weight for body cells
          },
        };
      },
      // sorter: {
      //   compare: (a, b) => a.english - b.english,
      //   multiple: 1,
      // },
      render: () => <div className=""><DeleteOutlined style={{ color: "red", fontSize: "1.1rem" }} /></div>

    },
  ];


  const initialReportData = () => {
    reportDataAPI(pagination).then((res) => {
      console.log(res)
      const { results, page_size, total_count, total_pages } = res
      setReportData(results)
      setPagination((prev) => ({
        ...prev,
        pageSize: page_size,
        total: total_count,
      }))
    }
    ).catch(err => console.log(err))
  }
  console.log(reportData)

  useEffect(() => {
    if (searchActive) {
      searchDataApi()
    }
    else {
      initialReportData()
    }
  }, [pagination.current, pagination.pageSize])




  const onChange = (pagination, filters, sorter, extra) => {
    console.log(pagination)
    setPagination((prev) => ({
      ...prev,
      pageSize: pagination.pageSize,
      current: pagination.current
    }))
  };


  const onChangeSearch = (e) => {
    console.log(e)
    const { value } = e.target
    setSearchQuery(value)
    if (value === "") {
      onReset()
    }
  }

  const handleSearch = () => {
    searchDataApi(searchQuery, pagination).then(res => {
      setSearchActive(true)
      const { results, page_size, total_count, total_pages } = res
      setReportData(results)
      setPagination((prev) => ({
        ...prev,
        pageSize: page_size,
        total: total_count,
      }))
    }
    ).catch(err => console.log(err))
  }

  const onReset = () => {
    setSearchQuery('');
    initialReportData()
    setSearchActive(false)
  };

  return (
    <div className=''>
      <ModalComponent open={open} setOpen={setOpen} cancel={() => { setOpen(false), onReset() }} title={"Upload Report"} />
      <div className="px-5 py-2 text-2xl font-bold">Reports</div>
      <div className="px-5 py-2 flex flex-col gap-5 ">
        <div className="flex justify-between items-center pt-2">
          <div className=" flex gap-1">

            <Search
              placeholder="Search"
              size="large"
              className='w-[400px]'
              onChange={onChangeSearch}
              onSearch={handleSearch}

            />
            {
              <Button
                size="large"
                onClick={onReset}
                style={{ rotate: '180deg' }}
                icon={<RedoOutlined />}
              ></Button>

            }
          </div>

          <div className='bg-[#B2ECEC] font-bold text-sm px-3 py-2 cursor-pointer rounded-md' onClick={() => setOpen(true)}> Upload File</div>
        </div>
        <Table columns={columns} dataSource={reportData} onChange={onChange} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "0.5rem", borderRadius: "10px" }} pagination={pagination} />
      </div>
    </div>
  )
}

export default Reports  